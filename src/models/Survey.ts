import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("surveys")
class Survey {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

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

export { Survey };