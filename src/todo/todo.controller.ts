import { Controller, Get, Post, Body, Param, Delete, Put, ParseBoolPipe} from '@nestjs/common';
import { TodoService } from './todo.service';
import { todo } from './todo.entity';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    findAll(): Promise<todo[]> {
        return this.todoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<todo> {
        return this.todoService.findOne(id);
    }

    @Get('priority/:isPriority')
    async findPriority(
        @Param('isPriority', ParseBoolPipe) isPriority: boolean
    ): Promise<todo[]> {
        return this.todoService.findPriority(isPriority);
    }

    @Post()
    create(@Body() Todo: Partial<todo>): Promise<todo> {
        return this.todoService.create(Todo);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() Todo: Partial<todo>): Promise<todo> {
        return this.todoService.update(id, Todo);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.todoService.remove(id);
    }
}
