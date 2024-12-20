import { SetMetadata } from '@nestjs/common';

export const Usersdecorator = (...args: string[]) => SetMetadata('usersdecorator', args);
