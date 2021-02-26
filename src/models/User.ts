import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        // Se o id não existir, atribui a ele um valor uuid
        // Se ele existir, não altera-o, uma vez que poserá ser usado em um update, e.g.
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User }