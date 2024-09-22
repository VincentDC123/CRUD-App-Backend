import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { todo } from './todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([todo])],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
