import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    task: string;

    @Column({ length: 10000}) 
    description: string;

    @Column({ default: false})
    isPriority: boolean;
}