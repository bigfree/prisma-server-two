import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  sqltag as sql,
  empty,
  join,
  raw,
} from './runtime';

export { PrismaClientKnownRequestError }
export { PrismaClientUnknownRequestError }
export { PrismaClientRustPanicError }
export { PrismaClientInitializationError }
export { PrismaClientValidationError }

/**
 * Re-export of sql-template-tag
 */
export { sql, empty, join, raw }

/**
 * Prisma Client JS version: 2.1.1
 * Query Engine version: 34b761660584e32d715c3e86ecec3e2c4d50d0d9
 */
export declare type PrismaVersion = {
  client: string
}

export declare const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
 */
export declare type JsonObject = {[Key in string]?: JsonValue}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export declare interface JsonArray extends Array<JsonValue> {}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray


/**
 * Same as JsonObject, but allows undefined
 */
export declare type InputJsonObject = {[Key in string]?: JsonValue}
 
export declare interface InputJsonArray extends Array<JsonValue> {}
 
export declare type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray

declare type SelectAndInclude = {
  select: any
  include: any
}

declare type HasSelect = {
  select: any
}

declare type HasInclude = {
  include: any
}

declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export declare type Enumerable<T> = T | Array<T>;

export declare type TrueKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};
declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
  request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string, collectTimestamps?: any): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
}


/**
 * Client
**/

export declare type Datasource = {
  url?: string
}

export type Datasources = {
  db?: Datasource
}

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your prisma.schema file
   */
  datasources?: Datasources

  /**
   * @default "colorless"
   */
  errorFormat?: ErrorFormat

  /**
   * @example
   * ```
   * // Defaults to stdout
   * log: ['query', 'info', 'warn', 'error']
   * 
   * // Emit as events
   * log: [
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * ]
   * ```
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
   */
  log?: Array<LogLevel | LogDefinition>
}

export type Hooks = {
  beforeRequest?: (options: {query: string, path: string[], rootField?: string, typeName?: string, document: any}) => any
}

/* Types for Logging */
export type LogLevel = 'info' | 'query' | 'warn' | 'error'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
export type GetEvents<T extends Array<LogLevel | LogDefinition>> = GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]> 

export type QueryEvent = {
  timestamp: Date
  query: string
  params: string
  duration: number
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}
/* End Types for Logging */

// tested in getLogLevel.test.ts
export declare function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md).
 */
export declare class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = keyof T extends 'log' ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md).
   */
  constructor(optionsArg?: T);
  on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * Connect with the database
   */
  connect(): Promise<void>;
  /**
   * @private
   */
  private runDisconnect;
  /**
   * Disconnect from the database
   */
  disconnect(): Promise<any>;

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md#raw-database-access).
  */
  executeRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md#raw-database-access).
  */
  queryRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): UserDelegate;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): TaskDelegate;

  /**
   * `prisma.label`: Exposes CRUD operations for the **Label** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labels
    * const labels = await prisma.label.findMany()
    * ```
    */
  get label(): LabelDelegate;
}



/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const OrderByArg: {
  asc: 'asc',
  desc: 'desc'
};

export declare type OrderByArg = (typeof OrderByArg)[keyof typeof OrderByArg]



/**
 * Model User
 */

export type User = {
  id: string
  email: string
  name: string | null
  password: string
  createdAt: Date
  updatedAt: Date | null
  deletedAt: Date | null
}

export type UserSelect = {
  id?: boolean
  email?: boolean
  name?: boolean
  password?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  deletedAt?: boolean
  tasks?: boolean | FindManyTaskArgs
}

export type UserInclude = {
  tasks?: boolean | FindManyTaskArgs
}

export type UserGetPayload<
  S extends boolean | null | undefined | UserArgs,
  U = keyof S
> = S extends true
  ? User
  : S extends undefined
  ? never
  : S extends UserArgs | FindManyUserArgs
  ? 'include' extends U
    ? User  & {
      [P in TrueKeys<S['include']>]:
      P extends 'tasks'
      ? Array<TaskGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof User ? User[P]
: 
      P extends 'tasks'
      ? Array<TaskGetPayload<S['select'][P]>> : never
    }
  : User
: User


export interface UserDelegate {
  /**
   * Find zero or one User.
   * @param {FindOneUserArgs} args - Arguments to find a User
   * @example
   * // Get one User
   * const user = await prisma.user.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneUserArgs>(
    args: Subset<T, FindOneUserArgs>
  ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
  /**
   * Find zero or more Users.
   * @param {FindManyUserArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Users
   * const users = await prisma.user.findMany()
   * 
   * // Get first 10 Users
   * const users = await prisma.user.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyUserArgs>(
    args?: Subset<T, FindManyUserArgs>
  ): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>
  /**
   * Create a User.
   * @param {UserCreateArgs} args - Arguments to create a User.
   * @example
   * // Create one User
   * const user = await prisma.user.create({
   *   data: {
   *     // ... data to create a User
   *   }
   * })
   * 
  **/
  create<T extends UserCreateArgs>(
    args: Subset<T, UserCreateArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Delete a User.
   * @param {UserDeleteArgs} args - Arguments to delete one User.
   * @example
   * // Delete one User
   * const user = await prisma.user.delete({
   *   where: {
   *     // ... filter to delete one User
   *   }
   * })
   * 
  **/
  delete<T extends UserDeleteArgs>(
    args: Subset<T, UserDeleteArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Update one User.
   * @param {UserUpdateArgs} args - Arguments to update one User.
   * @example
   * // Update one User
   * const user = await prisma.user.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends UserUpdateArgs>(
    args: Subset<T, UserUpdateArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Delete zero or more Users.
   * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
   * @example
   * // Delete a few Users
   * const { count } = await prisma.user.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends UserDeleteManyArgs>(
    args: Subset<T, UserDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Users.
   * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Users
   * const user = await prisma.user.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends UserUpdateManyArgs>(
    args: Subset<T, UserUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one User.
   * @param {UserUpsertArgs} args - Arguments to update or create a User.
   * @example
   * // Update or create a User
   * const user = await prisma.user.upsert({
   *   create: {
   *     // ... data to create a User
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the User we want to update
   *   }
   * })
  **/
  upsert<T extends UserUpsertArgs>(
    args: Subset<T, UserUpsertArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * 
   */
  count(args?: Omit<FindManyUserArgs, 'select' | 'include'>): Promise<number>
}

/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__UserClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  tasks<T extends FindManyTaskArgs = {}>(args?: Subset<T, FindManyTaskArgs>): CheckSelect<T, Promise<Array<Task>>, Promise<Array<TaskGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * User findOne
 */
export type FindOneUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter, which User to fetch.
  **/
  where: UserWhereUniqueInput
}


/**
 * User findMany
 */
export type FindManyUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter, which Users to fetch.
  **/
  where?: UserWhereInput
  /**
   * Determine the order of the Users to fetch.
  **/
  orderBy?: UserOrderByInput
  /**
   * Sets the position for listing Users.
  **/
  cursor?: UserWhereUniqueInput
  /**
   * The number of Users to fetch. If negative number, it will take Users before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Users.
  **/
  skip?: number
}


/**
 * User create
 */
export type UserCreateArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The data needed to create a User.
  **/
  data: UserCreateInput
}


/**
 * User update
 */
export type UserUpdateArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The data needed to update a User.
  **/
  data: UserUpdateInput
  /**
   * Choose, which User to update.
  **/
  where: UserWhereUniqueInput
}


/**
 * User updateMany
 */
export type UserUpdateManyArgs = {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}


/**
 * User upsert
 */
export type UserUpsertArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * The filter to search for the User to update in case it exists.
  **/
  where: UserWhereUniqueInput
  /**
   * In case the User found by the `where` argument doesn't exist, create a new User with this data.
  **/
  create: UserCreateInput
  /**
   * In case the User was found with the provided `where` argument, update it with this data.
  **/
  update: UserUpdateInput
}


/**
 * User delete
 */
export type UserDeleteArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
  /**
   * Filter which User to delete.
  **/
  where: UserWhereUniqueInput
}


/**
 * User deleteMany
 */
export type UserDeleteManyArgs = {
  where?: UserWhereInput
}


/**
 * User without action
 */
export type UserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: UserSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: UserInclude | null
}



/**
 * Model Task
 */

export type Task = {
  id: string
  name: string
  content: string | null
  createdAt: Date
  updatedAt: Date | null
  deletedAt: Date | null
  archiveAt: Date | null
  userId: string
}

export type TaskSelect = {
  id?: boolean
  name?: boolean
  content?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  deletedAt?: boolean
  archiveAt?: boolean
  user?: boolean | UserArgs
  userId?: boolean
  labels?: boolean | FindManyLabelArgs
}

export type TaskInclude = {
  user?: boolean | UserArgs
  labels?: boolean | FindManyLabelArgs
}

export type TaskGetPayload<
  S extends boolean | null | undefined | TaskArgs,
  U = keyof S
> = S extends true
  ? Task
  : S extends undefined
  ? never
  : S extends TaskArgs | FindManyTaskArgs
  ? 'include' extends U
    ? Task  & {
      [P in TrueKeys<S['include']>]:
      P extends 'user'
      ? UserGetPayload<S['include'][P]> :
      P extends 'labels'
      ? Array<LabelGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Task ? Task[P]
: 
      P extends 'user'
      ? UserGetPayload<S['select'][P]> :
      P extends 'labels'
      ? Array<LabelGetPayload<S['select'][P]>> : never
    }
  : Task
: Task


export interface TaskDelegate {
  /**
   * Find zero or one Task.
   * @param {FindOneTaskArgs} args - Arguments to find a Task
   * @example
   * // Get one Task
   * const task = await prisma.task.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneTaskArgs>(
    args: Subset<T, FindOneTaskArgs>
  ): CheckSelect<T, Prisma__TaskClient<Task | null>, Prisma__TaskClient<TaskGetPayload<T> | null>>
  /**
   * Find zero or more Tasks.
   * @param {FindManyTaskArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Tasks
   * const tasks = await prisma.task.findMany()
   * 
   * // Get first 10 Tasks
   * const tasks = await prisma.task.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyTaskArgs>(
    args?: Subset<T, FindManyTaskArgs>
  ): CheckSelect<T, Promise<Array<Task>>, Promise<Array<TaskGetPayload<T>>>>
  /**
   * Create a Task.
   * @param {TaskCreateArgs} args - Arguments to create a Task.
   * @example
   * // Create one Task
   * const user = await prisma.task.create({
   *   data: {
   *     // ... data to create a Task
   *   }
   * })
   * 
  **/
  create<T extends TaskCreateArgs>(
    args: Subset<T, TaskCreateArgs>
  ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>
  /**
   * Delete a Task.
   * @param {TaskDeleteArgs} args - Arguments to delete one Task.
   * @example
   * // Delete one Task
   * const user = await prisma.task.delete({
   *   where: {
   *     // ... filter to delete one Task
   *   }
   * })
   * 
  **/
  delete<T extends TaskDeleteArgs>(
    args: Subset<T, TaskDeleteArgs>
  ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>
  /**
   * Update one Task.
   * @param {TaskUpdateArgs} args - Arguments to update one Task.
   * @example
   * // Update one Task
   * const task = await prisma.task.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends TaskUpdateArgs>(
    args: Subset<T, TaskUpdateArgs>
  ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>
  /**
   * Delete zero or more Tasks.
   * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
   * @example
   * // Delete a few Tasks
   * const { count } = await prisma.task.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends TaskDeleteManyArgs>(
    args: Subset<T, TaskDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Tasks.
   * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Tasks
   * const task = await prisma.task.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends TaskUpdateManyArgs>(
    args: Subset<T, TaskUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Task.
   * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
   * @example
   * // Update or create a Task
   * const task = await prisma.task.upsert({
   *   create: {
   *     // ... data to create a Task
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Task we want to update
   *   }
   * })
  **/
  upsert<T extends TaskUpsertArgs>(
    args: Subset<T, TaskUpsertArgs>
  ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>
  /**
   * 
   */
  count(args?: Omit<FindManyTaskArgs, 'select' | 'include'>): Promise<number>
}

/**
 * The delegate class that acts as a "Promise-like" for Task.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__TaskClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

  labels<T extends FindManyLabelArgs = {}>(args?: Subset<T, FindManyLabelArgs>): CheckSelect<T, Promise<Array<Label>>, Promise<Array<LabelGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Task findOne
 */
export type FindOneTaskArgs = {
  /**
   * Select specific fields to fetch from the Task
  **/
  select?: TaskSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TaskInclude | null
  /**
   * Filter, which Task to fetch.
  **/
  where: TaskWhereUniqueInput
}


/**
 * Task findMany
 */
export type FindManyTaskArgs = {
  /**
   * Select specific fields to fetch from the Task
  **/
  select?: TaskSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TaskInclude | null
  /**
   * Filter, which Tasks to fetch.
  **/
  where?: TaskWhereInput
  /**
   * Determine the order of the Tasks to fetch.
  **/
  orderBy?: TaskOrderByInput
  /**
   * Sets the position for listing Tasks.
  **/
  cursor?: TaskWhereUniqueInput
  /**
   * The number of Tasks to fetch. If negative number, it will take Tasks before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Tasks.
  **/
  skip?: number
}


/**
 * Task create
 */
export type TaskCreateArgs = {
  /**
   * Select specific fields to fetch from the Task
  **/
  select?: TaskSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TaskInclude | null
  /**
   * The data needed to create a Task.
  **/
  data: TaskCreateInput
}


/**
 * Task update
 */
export type TaskUpdateArgs = {
  /**
   * Select specific fields to fetch from the Task
  **/
  select?: TaskSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TaskInclude | null
  /**
   * The data needed to update a Task.
  **/
  data: TaskUpdateInput
  /**
   * Choose, which Task to update.
  **/
  where: TaskWhereUniqueInput
}


/**
 * Task updateMany
 */
export type TaskUpdateManyArgs = {
  data: TaskUpdateManyMutationInput
  where?: TaskWhereInput
}


/**
 * Task upsert
 */
export type TaskUpsertArgs = {
  /**
   * Select specific fields to fetch from the Task
  **/
  select?: TaskSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TaskInclude | null
  /**
   * The filter to search for the Task to update in case it exists.
  **/
  where: TaskWhereUniqueInput
  /**
   * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
  **/
  create: TaskCreateInput
  /**
   * In case the Task was found with the provided `where` argument, update it with this data.
  **/
  update: TaskUpdateInput
}


/**
 * Task delete
 */
export type TaskDeleteArgs = {
  /**
   * Select specific fields to fetch from the Task
  **/
  select?: TaskSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TaskInclude | null
  /**
   * Filter which Task to delete.
  **/
  where: TaskWhereUniqueInput
}


/**
 * Task deleteMany
 */
export type TaskDeleteManyArgs = {
  where?: TaskWhereInput
}


/**
 * Task without action
 */
export type TaskArgs = {
  /**
   * Select specific fields to fetch from the Task
  **/
  select?: TaskSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: TaskInclude | null
}



/**
 * Model Label
 */

export type Label = {
  id: string
  name: string
  createdAt: Date
}

export type LabelSelect = {
  id?: boolean
  name?: boolean
  createdAt?: boolean
  tasks?: boolean | FindManyTaskArgs
}

export type LabelInclude = {
  tasks?: boolean | FindManyTaskArgs
}

export type LabelGetPayload<
  S extends boolean | null | undefined | LabelArgs,
  U = keyof S
> = S extends true
  ? Label
  : S extends undefined
  ? never
  : S extends LabelArgs | FindManyLabelArgs
  ? 'include' extends U
    ? Label  & {
      [P in TrueKeys<S['include']>]:
      P extends 'tasks'
      ? Array<TaskGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Label ? Label[P]
: 
      P extends 'tasks'
      ? Array<TaskGetPayload<S['select'][P]>> : never
    }
  : Label
: Label


export interface LabelDelegate {
  /**
   * Find zero or one Label.
   * @param {FindOneLabelArgs} args - Arguments to find a Label
   * @example
   * // Get one Label
   * const label = await prisma.label.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneLabelArgs>(
    args: Subset<T, FindOneLabelArgs>
  ): CheckSelect<T, Prisma__LabelClient<Label | null>, Prisma__LabelClient<LabelGetPayload<T> | null>>
  /**
   * Find zero or more Labels.
   * @param {FindManyLabelArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Labels
   * const labels = await prisma.label.findMany()
   * 
   * // Get first 10 Labels
   * const labels = await prisma.label.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const labelWithIdOnly = await prisma.label.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyLabelArgs>(
    args?: Subset<T, FindManyLabelArgs>
  ): CheckSelect<T, Promise<Array<Label>>, Promise<Array<LabelGetPayload<T>>>>
  /**
   * Create a Label.
   * @param {LabelCreateArgs} args - Arguments to create a Label.
   * @example
   * // Create one Label
   * const user = await prisma.label.create({
   *   data: {
   *     // ... data to create a Label
   *   }
   * })
   * 
  **/
  create<T extends LabelCreateArgs>(
    args: Subset<T, LabelCreateArgs>
  ): CheckSelect<T, Prisma__LabelClient<Label>, Prisma__LabelClient<LabelGetPayload<T>>>
  /**
   * Delete a Label.
   * @param {LabelDeleteArgs} args - Arguments to delete one Label.
   * @example
   * // Delete one Label
   * const user = await prisma.label.delete({
   *   where: {
   *     // ... filter to delete one Label
   *   }
   * })
   * 
  **/
  delete<T extends LabelDeleteArgs>(
    args: Subset<T, LabelDeleteArgs>
  ): CheckSelect<T, Prisma__LabelClient<Label>, Prisma__LabelClient<LabelGetPayload<T>>>
  /**
   * Update one Label.
   * @param {LabelUpdateArgs} args - Arguments to update one Label.
   * @example
   * // Update one Label
   * const label = await prisma.label.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends LabelUpdateArgs>(
    args: Subset<T, LabelUpdateArgs>
  ): CheckSelect<T, Prisma__LabelClient<Label>, Prisma__LabelClient<LabelGetPayload<T>>>
  /**
   * Delete zero or more Labels.
   * @param {LabelDeleteManyArgs} args - Arguments to filter Labels to delete.
   * @example
   * // Delete a few Labels
   * const { count } = await prisma.label.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends LabelDeleteManyArgs>(
    args: Subset<T, LabelDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Labels.
   * @param {LabelUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Labels
   * const label = await prisma.label.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends LabelUpdateManyArgs>(
    args: Subset<T, LabelUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Label.
   * @param {LabelUpsertArgs} args - Arguments to update or create a Label.
   * @example
   * // Update or create a Label
   * const label = await prisma.label.upsert({
   *   create: {
   *     // ... data to create a Label
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Label we want to update
   *   }
   * })
  **/
  upsert<T extends LabelUpsertArgs>(
    args: Subset<T, LabelUpsertArgs>
  ): CheckSelect<T, Prisma__LabelClient<Label>, Prisma__LabelClient<LabelGetPayload<T>>>
  /**
   * 
   */
  count(args?: Omit<FindManyLabelArgs, 'select' | 'include'>): Promise<number>
}

/**
 * The delegate class that acts as a "Promise-like" for Label.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__LabelClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  private _collectTimestamps?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  tasks<T extends FindManyTaskArgs = {}>(args?: Subset<T, FindManyTaskArgs>): CheckSelect<T, Promise<Array<Task>>, Promise<Array<TaskGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Label findOne
 */
export type FindOneLabelArgs = {
  /**
   * Select specific fields to fetch from the Label
  **/
  select?: LabelSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: LabelInclude | null
  /**
   * Filter, which Label to fetch.
  **/
  where: LabelWhereUniqueInput
}


/**
 * Label findMany
 */
export type FindManyLabelArgs = {
  /**
   * Select specific fields to fetch from the Label
  **/
  select?: LabelSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: LabelInclude | null
  /**
   * Filter, which Labels to fetch.
  **/
  where?: LabelWhereInput
  /**
   * Determine the order of the Labels to fetch.
  **/
  orderBy?: LabelOrderByInput
  /**
   * Sets the position for listing Labels.
  **/
  cursor?: LabelWhereUniqueInput
  /**
   * The number of Labels to fetch. If negative number, it will take Labels before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Labels.
  **/
  skip?: number
}


/**
 * Label create
 */
export type LabelCreateArgs = {
  /**
   * Select specific fields to fetch from the Label
  **/
  select?: LabelSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: LabelInclude | null
  /**
   * The data needed to create a Label.
  **/
  data: LabelCreateInput
}


/**
 * Label update
 */
export type LabelUpdateArgs = {
  /**
   * Select specific fields to fetch from the Label
  **/
  select?: LabelSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: LabelInclude | null
  /**
   * The data needed to update a Label.
  **/
  data: LabelUpdateInput
  /**
   * Choose, which Label to update.
  **/
  where: LabelWhereUniqueInput
}


/**
 * Label updateMany
 */
export type LabelUpdateManyArgs = {
  data: LabelUpdateManyMutationInput
  where?: LabelWhereInput
}


/**
 * Label upsert
 */
export type LabelUpsertArgs = {
  /**
   * Select specific fields to fetch from the Label
  **/
  select?: LabelSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: LabelInclude | null
  /**
   * The filter to search for the Label to update in case it exists.
  **/
  where: LabelWhereUniqueInput
  /**
   * In case the Label found by the `where` argument doesn't exist, create a new Label with this data.
  **/
  create: LabelCreateInput
  /**
   * In case the Label was found with the provided `where` argument, update it with this data.
  **/
  update: LabelUpdateInput
}


/**
 * Label delete
 */
export type LabelDeleteArgs = {
  /**
   * Select specific fields to fetch from the Label
  **/
  select?: LabelSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: LabelInclude | null
  /**
   * Filter which Label to delete.
  **/
  where: LabelWhereUniqueInput
}


/**
 * Label deleteMany
 */
export type LabelDeleteManyArgs = {
  where?: LabelWhereInput
}


/**
 * Label without action
 */
export type LabelArgs = {
  /**
   * Select specific fields to fetch from the Label
  **/
  select?: LabelSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: LabelInclude | null
}



/**
 * Deep Input Types
 */


export type LabelWhereInput = {
  id?: string | StringFilter
  name?: string | StringFilter
  createdAt?: Date | string | DateTimeFilter
  tasks?: TaskFilter | null
  AND?: Enumerable<LabelWhereInput>
  OR?: Array<LabelWhereInput>
  NOT?: Enumerable<LabelWhereInput>
}

export type TaskWhereInput = {
  id?: string | StringFilter
  name?: string | StringFilter
  content?: string | NullableStringFilter | null
  createdAt?: Date | string | DateTimeFilter
  updatedAt?: Date | string | NullableDateTimeFilter | null
  deletedAt?: Date | string | NullableDateTimeFilter | null
  archiveAt?: Date | string | NullableDateTimeFilter | null
  userId?: string | StringFilter
  labels?: LabelFilter | null
  AND?: Enumerable<TaskWhereInput>
  OR?: Array<TaskWhereInput>
  NOT?: Enumerable<TaskWhereInput>
  user?: UserWhereInput | null
}

export type UserWhereInput = {
  id?: string | StringFilter
  email?: string | StringFilter
  name?: string | NullableStringFilter | null
  password?: string | StringFilter
  createdAt?: Date | string | DateTimeFilter
  updatedAt?: Date | string | NullableDateTimeFilter | null
  deletedAt?: Date | string | NullableDateTimeFilter | null
  tasks?: TaskFilter | null
  AND?: Enumerable<UserWhereInput>
  OR?: Array<UserWhereInput>
  NOT?: Enumerable<UserWhereInput>
}

export type UserWhereUniqueInput = {
  id?: string
  email?: string
}

export type TaskWhereUniqueInput = {
  id?: string
}

export type LabelWhereUniqueInput = {
  id?: string
  name?: string
}

export type LabelCreateWithoutTasksInput = {
  id?: string
  name: string
  createdAt?: Date | string
}

export type LabelCreateManyWithoutTasksInput = {
  create?: Enumerable<LabelCreateWithoutTasksInput>
  connect?: Enumerable<LabelWhereUniqueInput>
}

export type TaskCreateWithoutUserInput = {
  id?: string
  name: string
  content?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  archiveAt?: Date | string | null
  labels?: LabelCreateManyWithoutTasksInput | null
}

export type TaskCreateManyWithoutUserInput = {
  create?: Enumerable<TaskCreateWithoutUserInput>
  connect?: Enumerable<TaskWhereUniqueInput>
}

export type UserCreateInput = {
  id?: string
  email: string
  name?: string | null
  password: string
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  tasks?: TaskCreateManyWithoutUserInput | null
}

export type LabelUpdateWithoutTasksDataInput = {
  id?: string
  name?: string
  createdAt?: Date | string
}

export type LabelUpdateWithWhereUniqueWithoutTasksInput = {
  where: LabelWhereUniqueInput
  data: LabelUpdateWithoutTasksDataInput
}

export type LabelScalarWhereInput = {
  id?: string | StringFilter
  name?: string | StringFilter
  createdAt?: Date | string | DateTimeFilter
  tasks?: TaskFilter | null
  AND?: Enumerable<LabelScalarWhereInput>
  OR?: Array<LabelScalarWhereInput>
  NOT?: Enumerable<LabelScalarWhereInput>
}

export type LabelUpdateManyDataInput = {
  id?: string
  name?: string
  createdAt?: Date | string
}

export type LabelUpdateManyWithWhereNestedInput = {
  where: LabelScalarWhereInput
  data: LabelUpdateManyDataInput
}

export type LabelUpsertWithWhereUniqueWithoutTasksInput = {
  where: LabelWhereUniqueInput
  update: LabelUpdateWithoutTasksDataInput
  create: LabelCreateWithoutTasksInput
}

export type LabelUpdateManyWithoutTasksInput = {
  create?: Enumerable<LabelCreateWithoutTasksInput>
  connect?: Enumerable<LabelWhereUniqueInput>
  set?: Enumerable<LabelWhereUniqueInput>
  disconnect?: Enumerable<LabelWhereUniqueInput>
  delete?: Enumerable<LabelWhereUniqueInput>
  update?: Enumerable<LabelUpdateWithWhereUniqueWithoutTasksInput>
  updateMany?: Enumerable<LabelUpdateManyWithWhereNestedInput>
  deleteMany?: Enumerable<LabelScalarWhereInput>
  upsert?: Enumerable<LabelUpsertWithWhereUniqueWithoutTasksInput>
}

export type TaskUpdateWithoutUserDataInput = {
  id?: string
  name?: string
  content?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  archiveAt?: Date | string | null
  labels?: LabelUpdateManyWithoutTasksInput
}

export type TaskUpdateWithWhereUniqueWithoutUserInput = {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutUserDataInput
}

export type TaskScalarWhereInput = {
  id?: string | StringFilter
  name?: string | StringFilter
  content?: string | NullableStringFilter | null
  createdAt?: Date | string | DateTimeFilter
  updatedAt?: Date | string | NullableDateTimeFilter | null
  deletedAt?: Date | string | NullableDateTimeFilter | null
  archiveAt?: Date | string | NullableDateTimeFilter | null
  userId?: string | StringFilter
  labels?: LabelFilter | null
  AND?: Enumerable<TaskScalarWhereInput>
  OR?: Array<TaskScalarWhereInput>
  NOT?: Enumerable<TaskScalarWhereInput>
}

export type TaskUpdateManyDataInput = {
  id?: string
  name?: string
  content?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  archiveAt?: Date | string | null
}

export type TaskUpdateManyWithWhereNestedInput = {
  where: TaskScalarWhereInput
  data: TaskUpdateManyDataInput
}

export type TaskUpsertWithWhereUniqueWithoutUserInput = {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutUserDataInput
  create: TaskCreateWithoutUserInput
}

export type TaskUpdateManyWithoutUserInput = {
  create?: Enumerable<TaskCreateWithoutUserInput>
  connect?: Enumerable<TaskWhereUniqueInput>
  set?: Enumerable<TaskWhereUniqueInput>
  disconnect?: Enumerable<TaskWhereUniqueInput>
  delete?: Enumerable<TaskWhereUniqueInput>
  update?: Enumerable<TaskUpdateWithWhereUniqueWithoutUserInput>
  updateMany?: Enumerable<TaskUpdateManyWithWhereNestedInput>
  deleteMany?: Enumerable<TaskScalarWhereInput>
  upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutUserInput>
}

export type UserUpdateInput = {
  id?: string
  email?: string
  name?: string | null
  password?: string
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  tasks?: TaskUpdateManyWithoutUserInput
}

export type UserUpdateManyMutationInput = {
  id?: string
  email?: string
  name?: string | null
  password?: string
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
}

export type UserCreateWithoutTasksInput = {
  id?: string
  email: string
  name?: string | null
  password: string
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
}

export type UserCreateOneWithoutTasksInput = {
  create?: UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput
}

export type TaskCreateInput = {
  id?: string
  name: string
  content?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  archiveAt?: Date | string | null
  user: UserCreateOneWithoutTasksInput
  labels?: LabelCreateManyWithoutTasksInput | null
}

export type UserUpdateWithoutTasksDataInput = {
  id?: string
  email?: string
  name?: string | null
  password?: string
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
}

export type UserUpsertWithoutTasksInput = {
  update: UserUpdateWithoutTasksDataInput
  create: UserCreateWithoutTasksInput
}

export type UserUpdateOneRequiredWithoutTasksInput = {
  create?: UserCreateWithoutTasksInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutTasksDataInput
  upsert?: UserUpsertWithoutTasksInput
}

export type TaskUpdateInput = {
  id?: string
  name?: string
  content?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  archiveAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutTasksInput
  labels?: LabelUpdateManyWithoutTasksInput
}

export type TaskUpdateManyMutationInput = {
  id?: string
  name?: string
  content?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  archiveAt?: Date | string | null
}

export type TaskCreateWithoutLabelsInput = {
  id?: string
  name: string
  content?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  archiveAt?: Date | string | null
  user: UserCreateOneWithoutTasksInput
}

export type TaskCreateManyWithoutLabelsInput = {
  create?: Enumerable<TaskCreateWithoutLabelsInput>
  connect?: Enumerable<TaskWhereUniqueInput>
}

export type LabelCreateInput = {
  id?: string
  name: string
  createdAt?: Date | string
  tasks?: TaskCreateManyWithoutLabelsInput | null
}

export type TaskUpdateWithoutLabelsDataInput = {
  id?: string
  name?: string
  content?: string | null
  createdAt?: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  archiveAt?: Date | string | null
  user?: UserUpdateOneRequiredWithoutTasksInput
}

export type TaskUpdateWithWhereUniqueWithoutLabelsInput = {
  where: TaskWhereUniqueInput
  data: TaskUpdateWithoutLabelsDataInput
}

export type TaskUpsertWithWhereUniqueWithoutLabelsInput = {
  where: TaskWhereUniqueInput
  update: TaskUpdateWithoutLabelsDataInput
  create: TaskCreateWithoutLabelsInput
}

export type TaskUpdateManyWithoutLabelsInput = {
  create?: Enumerable<TaskCreateWithoutLabelsInput>
  connect?: Enumerable<TaskWhereUniqueInput>
  set?: Enumerable<TaskWhereUniqueInput>
  disconnect?: Enumerable<TaskWhereUniqueInput>
  delete?: Enumerable<TaskWhereUniqueInput>
  update?: Enumerable<TaskUpdateWithWhereUniqueWithoutLabelsInput>
  updateMany?: Enumerable<TaskUpdateManyWithWhereNestedInput>
  deleteMany?: Enumerable<TaskScalarWhereInput>
  upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutLabelsInput>
}

export type LabelUpdateInput = {
  id?: string
  name?: string
  createdAt?: Date | string
  tasks?: TaskUpdateManyWithoutLabelsInput
}

export type LabelUpdateManyMutationInput = {
  id?: string
  name?: string
  createdAt?: Date | string
}

export type StringFilter = {
  equals?: string
  not?: string | StringFilter
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
}

export type DateTimeFilter = {
  equals?: Date | string
  not?: Date | string | DateTimeFilter
  in?: Enumerable<Date | string>
  notIn?: Enumerable<Date | string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
}

export type TaskFilter = {
  every?: TaskWhereInput
  some?: TaskWhereInput
  none?: TaskWhereInput
}

export type NullableStringFilter = {
  equals?: string | null
  not?: string | null | NullableStringFilter
  in?: Enumerable<string> | null
  notIn?: Enumerable<string> | null
  lt?: string | null
  lte?: string | null
  gt?: string | null
  gte?: string | null
  contains?: string | null
  startsWith?: string | null
  endsWith?: string | null
}

export type NullableDateTimeFilter = {
  equals?: Date | string | null
  not?: Date | string | null | NullableDateTimeFilter
  in?: Enumerable<Date | string> | null
  notIn?: Enumerable<Date | string> | null
  lt?: Date | string | null
  lte?: Date | string | null
  gt?: Date | string | null
  gte?: Date | string | null
}

export type LabelFilter = {
  every?: LabelWhereInput
  some?: LabelWhereInput
  none?: LabelWhereInput
}

export type UserOrderByInput = {
  id?: OrderByArg | null
  email?: OrderByArg | null
  name?: OrderByArg | null
  password?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
  deletedAt?: OrderByArg | null
}

export type TaskOrderByInput = {
  id?: OrderByArg | null
  name?: OrderByArg | null
  content?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
  deletedAt?: OrderByArg | null
  archiveAt?: OrderByArg | null
  userId?: OrderByArg | null
}

export type LabelOrderByInput = {
  id?: OrderByArg | null
  name?: OrderByArg | null
  createdAt?: OrderByArg | null
}

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number
}

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
