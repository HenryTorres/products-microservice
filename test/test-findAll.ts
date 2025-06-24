import { ClientProxyFactory, Transport } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

async function main() {

    // Creamos un cliente 
    const client = ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
            host: 'localhost',
            port: 8080
        }
    });

    // Enviamos un mensaje al microservicio
    const response = await firstValueFrom(client.send({ cmd: 'findAll' }, {}));
    console.log(response);
}

main();