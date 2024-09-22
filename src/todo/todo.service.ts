import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { todo } from './todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(todo)
        private todoRepository: Repository<todo>,
    ) {}

    findAll(): Promise<todo[]> {
        return this.todoRepository.find();
    }

    findOne(id: number): Promise<todo> {
        return this.todoRepository.findOneBy({ id });
    }

    async findPriority(isPriority: boolean): Promise<todo[]> {
        return this.todoRepository.find({
            where: { isPriority },
        });
    }

    async remove(id: number): Promise<void> {
        await this.todoRepository.delete(id);
    }

    create(Todo: Partial<todo>): Promise<todo> {
        const newTodo = this.todoRepository.create(Todo);
        return this.todoRepository.save(newTodo);
    }

    async update(id: number, Todo: Partial<todo>): Promise<todo> {
        await this.todoRepository.update(id, Todo);
        return this.findOne(id);
    }
}
