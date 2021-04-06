import { Module } from '@nestjs/common';
import { TodoServiceController } from './todo-service.controller';
import { TodoServiceService } from './todo-service.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule],
  controllers: [TodoServiceController],
  providers: [TodoServiceService],
})
export class TodoServiceModule {}
