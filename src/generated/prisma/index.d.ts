
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Bus
 * 
 */
export type Bus = $Result.DefaultSelection<Prisma.$BusPayload>
/**
 * Model DocumentType
 * 
 */
export type DocumentType = $Result.DefaultSelection<Prisma.$DocumentTypePayload>
/**
 * Model BusDocument
 * 
 */
export type BusDocument = $Result.DefaultSelection<Prisma.$BusDocumentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bus`: Exposes CRUD operations for the **Bus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buses
    * const buses = await prisma.bus.findMany()
    * ```
    */
  get bus(): Prisma.BusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentType`: Exposes CRUD operations for the **DocumentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentTypes
    * const documentTypes = await prisma.documentType.findMany()
    * ```
    */
  get documentType(): Prisma.DocumentTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.busDocument`: Exposes CRUD operations for the **BusDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusDocuments
    * const busDocuments = await prisma.busDocument.findMany()
    * ```
    */
  get busDocument(): Prisma.BusDocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Bus: 'Bus',
    DocumentType: 'DocumentType',
    BusDocument: 'BusDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "bus" | "documentType" | "busDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Bus: {
        payload: Prisma.$BusPayload<ExtArgs>
        fields: Prisma.BusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findFirst: {
            args: Prisma.BusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findMany: {
            args: Prisma.BusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          create: {
            args: Prisma.BusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          createMany: {
            args: Prisma.BusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          delete: {
            args: Prisma.BusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          update: {
            args: Prisma.BusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          deleteMany: {
            args: Prisma.BusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          upsert: {
            args: Prisma.BusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          aggregate: {
            args: Prisma.BusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBus>
          }
          groupBy: {
            args: Prisma.BusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusCountArgs<ExtArgs>
            result: $Utils.Optional<BusCountAggregateOutputType> | number
          }
        }
      }
      DocumentType: {
        payload: Prisma.$DocumentTypePayload<ExtArgs>
        fields: Prisma.DocumentTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          findFirst: {
            args: Prisma.DocumentTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          findMany: {
            args: Prisma.DocumentTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          create: {
            args: Prisma.DocumentTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          createMany: {
            args: Prisma.DocumentTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          delete: {
            args: Prisma.DocumentTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          update: {
            args: Prisma.DocumentTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          deleteMany: {
            args: Prisma.DocumentTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          upsert: {
            args: Prisma.DocumentTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          aggregate: {
            args: Prisma.DocumentTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentType>
          }
          groupBy: {
            args: Prisma.DocumentTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentTypeCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypeCountAggregateOutputType> | number
          }
        }
      }
      BusDocument: {
        payload: Prisma.$BusDocumentPayload<ExtArgs>
        fields: Prisma.BusDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusDocumentPayload>
          }
          findFirst: {
            args: Prisma.BusDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusDocumentPayload>
          }
          findMany: {
            args: Prisma.BusDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusDocumentPayload>[]
          }
          create: {
            args: Prisma.BusDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusDocumentPayload>
          }
          createMany: {
            args: Prisma.BusDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusDocumentPayload>[]
          }
          delete: {
            args: Prisma.BusDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusDocumentPayload>
          }
          update: {
            args: Prisma.BusDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusDocumentPayload>
          }
          deleteMany: {
            args: Prisma.BusDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusDocumentPayload>[]
          }
          upsert: {
            args: Prisma.BusDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusDocumentPayload>
          }
          aggregate: {
            args: Prisma.BusDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusDocument>
          }
          groupBy: {
            args: Prisma.BusDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<BusDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    bus?: BusOmit
    documentType?: DocumentTypeOmit
    busDocument?: BusDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BusCountOutputType
   */

  export type BusCountOutputType = {
    documents: number
  }

  export type BusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | BusCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusCountOutputType
     */
    select?: BusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusDocumentWhereInput
  }


  /**
   * Count Type DocumentTypeCountOutputType
   */

  export type DocumentTypeCountOutputType = {
    documents: number
  }

  export type DocumentTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DocumentTypeCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * DocumentTypeCountOutputType without action
   */
  export type DocumentTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeCountOutputType
     */
    select?: DocumentTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentTypeCountOutputType without action
   */
  export type DocumentTypeCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Bus
   */

  export type AggregateBus = {
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  export type BusAvgAggregateOutputType = {
    yearOfMake: number | null
  }

  export type BusSumAggregateOutputType = {
    yearOfMake: number | null
  }

  export type BusMinAggregateOutputType = {
    id: string | null
    registrationNo: string | null
    model: string | null
    manufacturer: string | null
    yearOfMake: number | null
    ownerName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusMaxAggregateOutputType = {
    id: string | null
    registrationNo: string | null
    model: string | null
    manufacturer: string | null
    yearOfMake: number | null
    ownerName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusCountAggregateOutputType = {
    id: number
    registrationNo: number
    model: number
    manufacturer: number
    yearOfMake: number
    ownerName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusAvgAggregateInputType = {
    yearOfMake?: true
  }

  export type BusSumAggregateInputType = {
    yearOfMake?: true
  }

  export type BusMinAggregateInputType = {
    id?: true
    registrationNo?: true
    model?: true
    manufacturer?: true
    yearOfMake?: true
    ownerName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusMaxAggregateInputType = {
    id?: true
    registrationNo?: true
    model?: true
    manufacturer?: true
    yearOfMake?: true
    ownerName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusCountAggregateInputType = {
    id?: true
    registrationNo?: true
    model?: true
    manufacturer?: true
    yearOfMake?: true
    ownerName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bus to aggregate.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buses
    **/
    _count?: true | BusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusMaxAggregateInputType
  }

  export type GetBusAggregateType<T extends BusAggregateArgs> = {
        [P in keyof T & keyof AggregateBus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBus[P]>
      : GetScalarType<T[P], AggregateBus[P]>
  }




  export type BusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
    orderBy?: BusOrderByWithAggregationInput | BusOrderByWithAggregationInput[]
    by: BusScalarFieldEnum[] | BusScalarFieldEnum
    having?: BusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusCountAggregateInputType | true
    _avg?: BusAvgAggregateInputType
    _sum?: BusSumAggregateInputType
    _min?: BusMinAggregateInputType
    _max?: BusMaxAggregateInputType
  }

  export type BusGroupByOutputType = {
    id: string
    registrationNo: string
    model: string | null
    manufacturer: string | null
    yearOfMake: number | null
    ownerName: string | null
    createdAt: Date
    updatedAt: Date
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  type GetBusGroupByPayload<T extends BusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusGroupByOutputType[P]>
            : GetScalarType<T[P], BusGroupByOutputType[P]>
        }
      >
    >


  export type BusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNo?: boolean
    model?: boolean
    manufacturer?: boolean
    yearOfMake?: boolean
    ownerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documents?: boolean | Bus$documentsArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNo?: boolean
    model?: boolean
    manufacturer?: boolean
    yearOfMake?: boolean
    ownerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bus"]>

  export type BusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNo?: boolean
    model?: boolean
    manufacturer?: boolean
    yearOfMake?: boolean
    ownerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bus"]>

  export type BusSelectScalar = {
    id?: boolean
    registrationNo?: boolean
    model?: boolean
    manufacturer?: boolean
    yearOfMake?: boolean
    ownerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registrationNo" | "model" | "manufacturer" | "yearOfMake" | "ownerName" | "createdAt" | "updatedAt", ExtArgs["result"]["bus"]>
  export type BusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Bus$documentsArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bus"
    objects: {
      documents: Prisma.$BusDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registrationNo: string
      model: string | null
      manufacturer: string | null
      yearOfMake: number | null
      ownerName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bus"]>
    composites: {}
  }

  type BusGetPayload<S extends boolean | null | undefined | BusDefaultArgs> = $Result.GetResult<Prisma.$BusPayload, S>

  type BusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusCountAggregateInputType | true
    }

  export interface BusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bus'], meta: { name: 'Bus' } }
    /**
     * Find zero or one Bus that matches the filter.
     * @param {BusFindUniqueArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusFindUniqueArgs>(args: SelectSubset<T, BusFindUniqueArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusFindUniqueOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusFindUniqueOrThrowArgs>(args: SelectSubset<T, BusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusFindFirstArgs>(args?: SelectSubset<T, BusFindFirstArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusFindFirstOrThrowArgs>(args?: SelectSubset<T, BusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buses
     * const buses = await prisma.bus.findMany()
     * 
     * // Get first 10 Buses
     * const buses = await prisma.bus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busWithIdOnly = await prisma.bus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusFindManyArgs>(args?: SelectSubset<T, BusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bus.
     * @param {BusCreateArgs} args - Arguments to create a Bus.
     * @example
     * // Create one Bus
     * const Bus = await prisma.bus.create({
     *   data: {
     *     // ... data to create a Bus
     *   }
     * })
     * 
     */
    create<T extends BusCreateArgs>(args: SelectSubset<T, BusCreateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buses.
     * @param {BusCreateManyArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusCreateManyArgs>(args?: SelectSubset<T, BusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buses and returns the data saved in the database.
     * @param {BusCreateManyAndReturnArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buses and only return the `id`
     * const busWithIdOnly = await prisma.bus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusCreateManyAndReturnArgs>(args?: SelectSubset<T, BusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bus.
     * @param {BusDeleteArgs} args - Arguments to delete one Bus.
     * @example
     * // Delete one Bus
     * const Bus = await prisma.bus.delete({
     *   where: {
     *     // ... filter to delete one Bus
     *   }
     * })
     * 
     */
    delete<T extends BusDeleteArgs>(args: SelectSubset<T, BusDeleteArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bus.
     * @param {BusUpdateArgs} args - Arguments to update one Bus.
     * @example
     * // Update one Bus
     * const bus = await prisma.bus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusUpdateArgs>(args: SelectSubset<T, BusUpdateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buses.
     * @param {BusDeleteManyArgs} args - Arguments to filter Buses to delete.
     * @example
     * // Delete a few Buses
     * const { count } = await prisma.bus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusDeleteManyArgs>(args?: SelectSubset<T, BusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusUpdateManyArgs>(args: SelectSubset<T, BusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses and returns the data updated in the database.
     * @param {BusUpdateManyAndReturnArgs} args - Arguments to update many Buses.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buses and only return the `id`
     * const busWithIdOnly = await prisma.bus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusUpdateManyAndReturnArgs>(args: SelectSubset<T, BusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bus.
     * @param {BusUpsertArgs} args - Arguments to update or create a Bus.
     * @example
     * // Update or create a Bus
     * const bus = await prisma.bus.upsert({
     *   create: {
     *     // ... data to create a Bus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bus we want to update
     *   }
     * })
     */
    upsert<T extends BusUpsertArgs>(args: SelectSubset<T, BusUpsertArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusCountArgs} args - Arguments to filter Buses to count.
     * @example
     * // Count the number of Buses
     * const count = await prisma.bus.count({
     *   where: {
     *     // ... the filter for the Buses we want to count
     *   }
     * })
    **/
    count<T extends BusCountArgs>(
      args?: Subset<T, BusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusAggregateArgs>(args: Subset<T, BusAggregateArgs>): Prisma.PrismaPromise<GetBusAggregateType<T>>

    /**
     * Group by Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusGroupByArgs['orderBy'] }
        : { orderBy?: BusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bus model
   */
  readonly fields: BusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends Bus$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Bus$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bus model
   */
  interface BusFieldRefs {
    readonly id: FieldRef<"Bus", 'String'>
    readonly registrationNo: FieldRef<"Bus", 'String'>
    readonly model: FieldRef<"Bus", 'String'>
    readonly manufacturer: FieldRef<"Bus", 'String'>
    readonly yearOfMake: FieldRef<"Bus", 'Int'>
    readonly ownerName: FieldRef<"Bus", 'String'>
    readonly createdAt: FieldRef<"Bus", 'DateTime'>
    readonly updatedAt: FieldRef<"Bus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bus findUnique
   */
  export type BusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findUniqueOrThrow
   */
  export type BusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findFirst
   */
  export type BusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findFirstOrThrow
   */
  export type BusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findMany
   */
  export type BusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Buses to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus create
   */
  export type BusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to create a Bus.
     */
    data: XOR<BusCreateInput, BusUncheckedCreateInput>
  }

  /**
   * Bus createMany
   */
  export type BusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bus createManyAndReturn
   */
  export type BusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bus update
   */
  export type BusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to update a Bus.
     */
    data: XOR<BusUpdateInput, BusUncheckedUpdateInput>
    /**
     * Choose, which Bus to update.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus updateMany
   */
  export type BusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
  }

  /**
   * Bus updateManyAndReturn
   */
  export type BusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
  }

  /**
   * Bus upsert
   */
  export type BusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The filter to search for the Bus to update in case it exists.
     */
    where: BusWhereUniqueInput
    /**
     * In case the Bus found by the `where` argument doesn't exist, create a new Bus with this data.
     */
    create: XOR<BusCreateInput, BusUncheckedCreateInput>
    /**
     * In case the Bus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusUpdateInput, BusUncheckedUpdateInput>
  }

  /**
   * Bus delete
   */
  export type BusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter which Bus to delete.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus deleteMany
   */
  export type BusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buses to delete
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to delete.
     */
    limit?: number
  }

  /**
   * Bus.documents
   */
  export type Bus$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
    where?: BusDocumentWhereInput
    orderBy?: BusDocumentOrderByWithRelationInput | BusDocumentOrderByWithRelationInput[]
    cursor?: BusDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusDocumentScalarFieldEnum | BusDocumentScalarFieldEnum[]
  }

  /**
   * Bus without action
   */
  export type BusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
  }


  /**
   * Model DocumentType
   */

  export type AggregateDocumentType = {
    _count: DocumentTypeCountAggregateOutputType | null
    _min: DocumentTypeMinAggregateOutputType | null
    _max: DocumentTypeMaxAggregateOutputType | null
  }

  export type DocumentTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentType to aggregate.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentTypes
    **/
    _count?: true | DocumentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentTypeMaxAggregateInputType
  }

  export type GetDocumentTypeAggregateType<T extends DocumentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentType[P]>
      : GetScalarType<T[P], AggregateDocumentType[P]>
  }




  export type DocumentTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTypeWhereInput
    orderBy?: DocumentTypeOrderByWithAggregationInput | DocumentTypeOrderByWithAggregationInput[]
    by: DocumentTypeScalarFieldEnum[] | DocumentTypeScalarFieldEnum
    having?: DocumentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentTypeCountAggregateInputType | true
    _min?: DocumentTypeMinAggregateInputType
    _max?: DocumentTypeMaxAggregateInputType
  }

  export type DocumentTypeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: DocumentTypeCountAggregateOutputType | null
    _min: DocumentTypeMinAggregateOutputType | null
    _max: DocumentTypeMaxAggregateOutputType | null
  }

  type GetDocumentTypeGroupByPayload<T extends DocumentTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentTypeGroupByOutputType[P]>
        }
      >
    >


  export type DocumentTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documents?: boolean | DocumentType$documentsArgs<ExtArgs>
    _count?: boolean | DocumentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["documentType"]>
  export type DocumentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DocumentType$documentsArgs<ExtArgs>
    _count?: boolean | DocumentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentType"
    objects: {
      documents: Prisma.$BusDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["documentType"]>
    composites: {}
  }

  type DocumentTypeGetPayload<S extends boolean | null | undefined | DocumentTypeDefaultArgs> = $Result.GetResult<Prisma.$DocumentTypePayload, S>

  type DocumentTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentTypeCountAggregateInputType | true
    }

  export interface DocumentTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentType'], meta: { name: 'DocumentType' } }
    /**
     * Find zero or one DocumentType that matches the filter.
     * @param {DocumentTypeFindUniqueArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentTypeFindUniqueArgs>(args: SelectSubset<T, DocumentTypeFindUniqueArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentTypeFindUniqueOrThrowArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindFirstArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentTypeFindFirstArgs>(args?: SelectSubset<T, DocumentTypeFindFirstArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindFirstOrThrowArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentTypes
     * const documentTypes = await prisma.documentType.findMany()
     * 
     * // Get first 10 DocumentTypes
     * const documentTypes = await prisma.documentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentTypeFindManyArgs>(args?: SelectSubset<T, DocumentTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentType.
     * @param {DocumentTypeCreateArgs} args - Arguments to create a DocumentType.
     * @example
     * // Create one DocumentType
     * const DocumentType = await prisma.documentType.create({
     *   data: {
     *     // ... data to create a DocumentType
     *   }
     * })
     * 
     */
    create<T extends DocumentTypeCreateArgs>(args: SelectSubset<T, DocumentTypeCreateArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentTypes.
     * @param {DocumentTypeCreateManyArgs} args - Arguments to create many DocumentTypes.
     * @example
     * // Create many DocumentTypes
     * const documentType = await prisma.documentType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentTypeCreateManyArgs>(args?: SelectSubset<T, DocumentTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentTypes and returns the data saved in the database.
     * @param {DocumentTypeCreateManyAndReturnArgs} args - Arguments to create many DocumentTypes.
     * @example
     * // Create many DocumentTypes
     * const documentType = await prisma.documentType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentTypes and only return the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentType.
     * @param {DocumentTypeDeleteArgs} args - Arguments to delete one DocumentType.
     * @example
     * // Delete one DocumentType
     * const DocumentType = await prisma.documentType.delete({
     *   where: {
     *     // ... filter to delete one DocumentType
     *   }
     * })
     * 
     */
    delete<T extends DocumentTypeDeleteArgs>(args: SelectSubset<T, DocumentTypeDeleteArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentType.
     * @param {DocumentTypeUpdateArgs} args - Arguments to update one DocumentType.
     * @example
     * // Update one DocumentType
     * const documentType = await prisma.documentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentTypeUpdateArgs>(args: SelectSubset<T, DocumentTypeUpdateArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentTypes.
     * @param {DocumentTypeDeleteManyArgs} args - Arguments to filter DocumentTypes to delete.
     * @example
     * // Delete a few DocumentTypes
     * const { count } = await prisma.documentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentTypeDeleteManyArgs>(args?: SelectSubset<T, DocumentTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentTypes
     * const documentType = await prisma.documentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentTypeUpdateManyArgs>(args: SelectSubset<T, DocumentTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTypes and returns the data updated in the database.
     * @param {DocumentTypeUpdateManyAndReturnArgs} args - Arguments to update many DocumentTypes.
     * @example
     * // Update many DocumentTypes
     * const documentType = await prisma.documentType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentTypes and only return the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentType.
     * @param {DocumentTypeUpsertArgs} args - Arguments to update or create a DocumentType.
     * @example
     * // Update or create a DocumentType
     * const documentType = await prisma.documentType.upsert({
     *   create: {
     *     // ... data to create a DocumentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentType we want to update
     *   }
     * })
     */
    upsert<T extends DocumentTypeUpsertArgs>(args: SelectSubset<T, DocumentTypeUpsertArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeCountArgs} args - Arguments to filter DocumentTypes to count.
     * @example
     * // Count the number of DocumentTypes
     * const count = await prisma.documentType.count({
     *   where: {
     *     // ... the filter for the DocumentTypes we want to count
     *   }
     * })
    **/
    count<T extends DocumentTypeCountArgs>(
      args?: Subset<T, DocumentTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentTypeAggregateArgs>(args: Subset<T, DocumentTypeAggregateArgs>): Prisma.PrismaPromise<GetDocumentTypeAggregateType<T>>

    /**
     * Group by DocumentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentTypeGroupByArgs['orderBy'] }
        : { orderBy?: DocumentTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentType model
   */
  readonly fields: DocumentTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends DocumentType$documentsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentType$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentType model
   */
  interface DocumentTypeFieldRefs {
    readonly id: FieldRef<"DocumentType", 'String'>
    readonly name: FieldRef<"DocumentType", 'String'>
    readonly description: FieldRef<"DocumentType", 'String'>
    readonly createdAt: FieldRef<"DocumentType", 'DateTime'>
    readonly updatedAt: FieldRef<"DocumentType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentType findUnique
   */
  export type DocumentTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType findUniqueOrThrow
   */
  export type DocumentTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType findFirst
   */
  export type DocumentTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTypes.
     */
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType findFirstOrThrow
   */
  export type DocumentTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTypes.
     */
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType findMany
   */
  export type DocumentTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTypes to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType create
   */
  export type DocumentTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentType.
     */
    data: XOR<DocumentTypeCreateInput, DocumentTypeUncheckedCreateInput>
  }

  /**
   * DocumentType createMany
   */
  export type DocumentTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentTypes.
     */
    data: DocumentTypeCreateManyInput | DocumentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentType createManyAndReturn
   */
  export type DocumentTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentTypes.
     */
    data: DocumentTypeCreateManyInput | DocumentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentType update
   */
  export type DocumentTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentType.
     */
    data: XOR<DocumentTypeUpdateInput, DocumentTypeUncheckedUpdateInput>
    /**
     * Choose, which DocumentType to update.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType updateMany
   */
  export type DocumentTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentTypes.
     */
    data: XOR<DocumentTypeUpdateManyMutationInput, DocumentTypeUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTypes to update
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to update.
     */
    limit?: number
  }

  /**
   * DocumentType updateManyAndReturn
   */
  export type DocumentTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * The data used to update DocumentTypes.
     */
    data: XOR<DocumentTypeUpdateManyMutationInput, DocumentTypeUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTypes to update
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to update.
     */
    limit?: number
  }

  /**
   * DocumentType upsert
   */
  export type DocumentTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentType to update in case it exists.
     */
    where: DocumentTypeWhereUniqueInput
    /**
     * In case the DocumentType found by the `where` argument doesn't exist, create a new DocumentType with this data.
     */
    create: XOR<DocumentTypeCreateInput, DocumentTypeUncheckedCreateInput>
    /**
     * In case the DocumentType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentTypeUpdateInput, DocumentTypeUncheckedUpdateInput>
  }

  /**
   * DocumentType delete
   */
  export type DocumentTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter which DocumentType to delete.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType deleteMany
   */
  export type DocumentTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTypes to delete
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to delete.
     */
    limit?: number
  }

  /**
   * DocumentType.documents
   */
  export type DocumentType$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
    where?: BusDocumentWhereInput
    orderBy?: BusDocumentOrderByWithRelationInput | BusDocumentOrderByWithRelationInput[]
    cursor?: BusDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusDocumentScalarFieldEnum | BusDocumentScalarFieldEnum[]
  }

  /**
   * DocumentType without action
   */
  export type DocumentTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
  }


  /**
   * Model BusDocument
   */

  export type AggregateBusDocument = {
    _count: BusDocumentCountAggregateOutputType | null
    _min: BusDocumentMinAggregateOutputType | null
    _max: BusDocumentMaxAggregateOutputType | null
  }

  export type BusDocumentMinAggregateOutputType = {
    id: string | null
    busId: string | null
    docTypeId: string | null
    documentNumber: string | null
    issueDate: Date | null
    expiryDate: Date | null
    fileUrl: string | null
    remarks: string | null
    uploadedAt: Date | null
  }

  export type BusDocumentMaxAggregateOutputType = {
    id: string | null
    busId: string | null
    docTypeId: string | null
    documentNumber: string | null
    issueDate: Date | null
    expiryDate: Date | null
    fileUrl: string | null
    remarks: string | null
    uploadedAt: Date | null
  }

  export type BusDocumentCountAggregateOutputType = {
    id: number
    busId: number
    docTypeId: number
    documentNumber: number
    issueDate: number
    expiryDate: number
    fileUrl: number
    remarks: number
    uploadedAt: number
    _all: number
  }


  export type BusDocumentMinAggregateInputType = {
    id?: true
    busId?: true
    docTypeId?: true
    documentNumber?: true
    issueDate?: true
    expiryDate?: true
    fileUrl?: true
    remarks?: true
    uploadedAt?: true
  }

  export type BusDocumentMaxAggregateInputType = {
    id?: true
    busId?: true
    docTypeId?: true
    documentNumber?: true
    issueDate?: true
    expiryDate?: true
    fileUrl?: true
    remarks?: true
    uploadedAt?: true
  }

  export type BusDocumentCountAggregateInputType = {
    id?: true
    busId?: true
    docTypeId?: true
    documentNumber?: true
    issueDate?: true
    expiryDate?: true
    fileUrl?: true
    remarks?: true
    uploadedAt?: true
    _all?: true
  }

  export type BusDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusDocument to aggregate.
     */
    where?: BusDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusDocuments to fetch.
     */
    orderBy?: BusDocumentOrderByWithRelationInput | BusDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusDocuments
    **/
    _count?: true | BusDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusDocumentMaxAggregateInputType
  }

  export type GetBusDocumentAggregateType<T extends BusDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateBusDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusDocument[P]>
      : GetScalarType<T[P], AggregateBusDocument[P]>
  }




  export type BusDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusDocumentWhereInput
    orderBy?: BusDocumentOrderByWithAggregationInput | BusDocumentOrderByWithAggregationInput[]
    by: BusDocumentScalarFieldEnum[] | BusDocumentScalarFieldEnum
    having?: BusDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusDocumentCountAggregateInputType | true
    _min?: BusDocumentMinAggregateInputType
    _max?: BusDocumentMaxAggregateInputType
  }

  export type BusDocumentGroupByOutputType = {
    id: string
    busId: string
    docTypeId: string
    documentNumber: string | null
    issueDate: Date | null
    expiryDate: Date | null
    fileUrl: string
    remarks: string | null
    uploadedAt: Date
    _count: BusDocumentCountAggregateOutputType | null
    _min: BusDocumentMinAggregateOutputType | null
    _max: BusDocumentMaxAggregateOutputType | null
  }

  type GetBusDocumentGroupByPayload<T extends BusDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], BusDocumentGroupByOutputType[P]>
        }
      >
    >


  export type BusDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busId?: boolean
    docTypeId?: boolean
    documentNumber?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    fileUrl?: boolean
    remarks?: boolean
    uploadedAt?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    docType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busDocument"]>

  export type BusDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busId?: boolean
    docTypeId?: boolean
    documentNumber?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    fileUrl?: boolean
    remarks?: boolean
    uploadedAt?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    docType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busDocument"]>

  export type BusDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busId?: boolean
    docTypeId?: boolean
    documentNumber?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    fileUrl?: boolean
    remarks?: boolean
    uploadedAt?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    docType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busDocument"]>

  export type BusDocumentSelectScalar = {
    id?: boolean
    busId?: boolean
    docTypeId?: boolean
    documentNumber?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    fileUrl?: boolean
    remarks?: boolean
    uploadedAt?: boolean
  }

  export type BusDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "busId" | "docTypeId" | "documentNumber" | "issueDate" | "expiryDate" | "fileUrl" | "remarks" | "uploadedAt", ExtArgs["result"]["busDocument"]>
  export type BusDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    docType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }
  export type BusDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    docType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }
  export type BusDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    docType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }

  export type $BusDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusDocument"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
      docType: Prisma.$DocumentTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      busId: string
      docTypeId: string
      documentNumber: string | null
      issueDate: Date | null
      expiryDate: Date | null
      fileUrl: string
      remarks: string | null
      uploadedAt: Date
    }, ExtArgs["result"]["busDocument"]>
    composites: {}
  }

  type BusDocumentGetPayload<S extends boolean | null | undefined | BusDocumentDefaultArgs> = $Result.GetResult<Prisma.$BusDocumentPayload, S>

  type BusDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusDocumentCountAggregateInputType | true
    }

  export interface BusDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusDocument'], meta: { name: 'BusDocument' } }
    /**
     * Find zero or one BusDocument that matches the filter.
     * @param {BusDocumentFindUniqueArgs} args - Arguments to find a BusDocument
     * @example
     * // Get one BusDocument
     * const busDocument = await prisma.busDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusDocumentFindUniqueArgs>(args: SelectSubset<T, BusDocumentFindUniqueArgs<ExtArgs>>): Prisma__BusDocumentClient<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusDocumentFindUniqueOrThrowArgs} args - Arguments to find a BusDocument
     * @example
     * // Get one BusDocument
     * const busDocument = await prisma.busDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, BusDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusDocumentClient<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusDocumentFindFirstArgs} args - Arguments to find a BusDocument
     * @example
     * // Get one BusDocument
     * const busDocument = await prisma.busDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusDocumentFindFirstArgs>(args?: SelectSubset<T, BusDocumentFindFirstArgs<ExtArgs>>): Prisma__BusDocumentClient<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusDocumentFindFirstOrThrowArgs} args - Arguments to find a BusDocument
     * @example
     * // Get one BusDocument
     * const busDocument = await prisma.busDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, BusDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusDocumentClient<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusDocuments
     * const busDocuments = await prisma.busDocument.findMany()
     * 
     * // Get first 10 BusDocuments
     * const busDocuments = await prisma.busDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busDocumentWithIdOnly = await prisma.busDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusDocumentFindManyArgs>(args?: SelectSubset<T, BusDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusDocument.
     * @param {BusDocumentCreateArgs} args - Arguments to create a BusDocument.
     * @example
     * // Create one BusDocument
     * const BusDocument = await prisma.busDocument.create({
     *   data: {
     *     // ... data to create a BusDocument
     *   }
     * })
     * 
     */
    create<T extends BusDocumentCreateArgs>(args: SelectSubset<T, BusDocumentCreateArgs<ExtArgs>>): Prisma__BusDocumentClient<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusDocuments.
     * @param {BusDocumentCreateManyArgs} args - Arguments to create many BusDocuments.
     * @example
     * // Create many BusDocuments
     * const busDocument = await prisma.busDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusDocumentCreateManyArgs>(args?: SelectSubset<T, BusDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusDocuments and returns the data saved in the database.
     * @param {BusDocumentCreateManyAndReturnArgs} args - Arguments to create many BusDocuments.
     * @example
     * // Create many BusDocuments
     * const busDocument = await prisma.busDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusDocuments and only return the `id`
     * const busDocumentWithIdOnly = await prisma.busDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, BusDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusDocument.
     * @param {BusDocumentDeleteArgs} args - Arguments to delete one BusDocument.
     * @example
     * // Delete one BusDocument
     * const BusDocument = await prisma.busDocument.delete({
     *   where: {
     *     // ... filter to delete one BusDocument
     *   }
     * })
     * 
     */
    delete<T extends BusDocumentDeleteArgs>(args: SelectSubset<T, BusDocumentDeleteArgs<ExtArgs>>): Prisma__BusDocumentClient<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusDocument.
     * @param {BusDocumentUpdateArgs} args - Arguments to update one BusDocument.
     * @example
     * // Update one BusDocument
     * const busDocument = await prisma.busDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusDocumentUpdateArgs>(args: SelectSubset<T, BusDocumentUpdateArgs<ExtArgs>>): Prisma__BusDocumentClient<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusDocuments.
     * @param {BusDocumentDeleteManyArgs} args - Arguments to filter BusDocuments to delete.
     * @example
     * // Delete a few BusDocuments
     * const { count } = await prisma.busDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusDocumentDeleteManyArgs>(args?: SelectSubset<T, BusDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusDocuments
     * const busDocument = await prisma.busDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusDocumentUpdateManyArgs>(args: SelectSubset<T, BusDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusDocuments and returns the data updated in the database.
     * @param {BusDocumentUpdateManyAndReturnArgs} args - Arguments to update many BusDocuments.
     * @example
     * // Update many BusDocuments
     * const busDocument = await prisma.busDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusDocuments and only return the `id`
     * const busDocumentWithIdOnly = await prisma.busDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, BusDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusDocument.
     * @param {BusDocumentUpsertArgs} args - Arguments to update or create a BusDocument.
     * @example
     * // Update or create a BusDocument
     * const busDocument = await prisma.busDocument.upsert({
     *   create: {
     *     // ... data to create a BusDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusDocument we want to update
     *   }
     * })
     */
    upsert<T extends BusDocumentUpsertArgs>(args: SelectSubset<T, BusDocumentUpsertArgs<ExtArgs>>): Prisma__BusDocumentClient<$Result.GetResult<Prisma.$BusDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusDocumentCountArgs} args - Arguments to filter BusDocuments to count.
     * @example
     * // Count the number of BusDocuments
     * const count = await prisma.busDocument.count({
     *   where: {
     *     // ... the filter for the BusDocuments we want to count
     *   }
     * })
    **/
    count<T extends BusDocumentCountArgs>(
      args?: Subset<T, BusDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusDocumentAggregateArgs>(args: Subset<T, BusDocumentAggregateArgs>): Prisma.PrismaPromise<GetBusDocumentAggregateType<T>>

    /**
     * Group by BusDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusDocumentGroupByArgs['orderBy'] }
        : { orderBy?: BusDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusDocument model
   */
  readonly fields: BusDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    docType<T extends DocumentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTypeDefaultArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusDocument model
   */
  interface BusDocumentFieldRefs {
    readonly id: FieldRef<"BusDocument", 'String'>
    readonly busId: FieldRef<"BusDocument", 'String'>
    readonly docTypeId: FieldRef<"BusDocument", 'String'>
    readonly documentNumber: FieldRef<"BusDocument", 'String'>
    readonly issueDate: FieldRef<"BusDocument", 'DateTime'>
    readonly expiryDate: FieldRef<"BusDocument", 'DateTime'>
    readonly fileUrl: FieldRef<"BusDocument", 'String'>
    readonly remarks: FieldRef<"BusDocument", 'String'>
    readonly uploadedAt: FieldRef<"BusDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusDocument findUnique
   */
  export type BusDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusDocument to fetch.
     */
    where: BusDocumentWhereUniqueInput
  }

  /**
   * BusDocument findUniqueOrThrow
   */
  export type BusDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusDocument to fetch.
     */
    where: BusDocumentWhereUniqueInput
  }

  /**
   * BusDocument findFirst
   */
  export type BusDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusDocument to fetch.
     */
    where?: BusDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusDocuments to fetch.
     */
    orderBy?: BusDocumentOrderByWithRelationInput | BusDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusDocuments.
     */
    cursor?: BusDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusDocuments.
     */
    distinct?: BusDocumentScalarFieldEnum | BusDocumentScalarFieldEnum[]
  }

  /**
   * BusDocument findFirstOrThrow
   */
  export type BusDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusDocument to fetch.
     */
    where?: BusDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusDocuments to fetch.
     */
    orderBy?: BusDocumentOrderByWithRelationInput | BusDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusDocuments.
     */
    cursor?: BusDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusDocuments.
     */
    distinct?: BusDocumentScalarFieldEnum | BusDocumentScalarFieldEnum[]
  }

  /**
   * BusDocument findMany
   */
  export type BusDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusDocuments to fetch.
     */
    where?: BusDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusDocuments to fetch.
     */
    orderBy?: BusDocumentOrderByWithRelationInput | BusDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusDocuments.
     */
    cursor?: BusDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusDocuments.
     */
    skip?: number
    distinct?: BusDocumentScalarFieldEnum | BusDocumentScalarFieldEnum[]
  }

  /**
   * BusDocument create
   */
  export type BusDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a BusDocument.
     */
    data: XOR<BusDocumentCreateInput, BusDocumentUncheckedCreateInput>
  }

  /**
   * BusDocument createMany
   */
  export type BusDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusDocuments.
     */
    data: BusDocumentCreateManyInput | BusDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusDocument createManyAndReturn
   */
  export type BusDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many BusDocuments.
     */
    data: BusDocumentCreateManyInput | BusDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusDocument update
   */
  export type BusDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a BusDocument.
     */
    data: XOR<BusDocumentUpdateInput, BusDocumentUncheckedUpdateInput>
    /**
     * Choose, which BusDocument to update.
     */
    where: BusDocumentWhereUniqueInput
  }

  /**
   * BusDocument updateMany
   */
  export type BusDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusDocuments.
     */
    data: XOR<BusDocumentUpdateManyMutationInput, BusDocumentUncheckedUpdateManyInput>
    /**
     * Filter which BusDocuments to update
     */
    where?: BusDocumentWhereInput
    /**
     * Limit how many BusDocuments to update.
     */
    limit?: number
  }

  /**
   * BusDocument updateManyAndReturn
   */
  export type BusDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * The data used to update BusDocuments.
     */
    data: XOR<BusDocumentUpdateManyMutationInput, BusDocumentUncheckedUpdateManyInput>
    /**
     * Filter which BusDocuments to update
     */
    where?: BusDocumentWhereInput
    /**
     * Limit how many BusDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusDocument upsert
   */
  export type BusDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the BusDocument to update in case it exists.
     */
    where: BusDocumentWhereUniqueInput
    /**
     * In case the BusDocument found by the `where` argument doesn't exist, create a new BusDocument with this data.
     */
    create: XOR<BusDocumentCreateInput, BusDocumentUncheckedCreateInput>
    /**
     * In case the BusDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusDocumentUpdateInput, BusDocumentUncheckedUpdateInput>
  }

  /**
   * BusDocument delete
   */
  export type BusDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
    /**
     * Filter which BusDocument to delete.
     */
    where: BusDocumentWhereUniqueInput
  }

  /**
   * BusDocument deleteMany
   */
  export type BusDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusDocuments to delete
     */
    where?: BusDocumentWhereInput
    /**
     * Limit how many BusDocuments to delete.
     */
    limit?: number
  }

  /**
   * BusDocument without action
   */
  export type BusDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusDocument
     */
    select?: BusDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusDocument
     */
    omit?: BusDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BusScalarFieldEnum: {
    id: 'id',
    registrationNo: 'registrationNo',
    model: 'model',
    manufacturer: 'manufacturer',
    yearOfMake: 'yearOfMake',
    ownerName: 'ownerName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusScalarFieldEnum = (typeof BusScalarFieldEnum)[keyof typeof BusScalarFieldEnum]


  export const DocumentTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentTypeScalarFieldEnum = (typeof DocumentTypeScalarFieldEnum)[keyof typeof DocumentTypeScalarFieldEnum]


  export const BusDocumentScalarFieldEnum: {
    id: 'id',
    busId: 'busId',
    docTypeId: 'docTypeId',
    documentNumber: 'documentNumber',
    issueDate: 'issueDate',
    expiryDate: 'expiryDate',
    fileUrl: 'fileUrl',
    remarks: 'remarks',
    uploadedAt: 'uploadedAt'
  };

  export type BusDocumentScalarFieldEnum = (typeof BusDocumentScalarFieldEnum)[keyof typeof BusDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BusWhereInput = {
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    id?: StringFilter<"Bus"> | string
    registrationNo?: StringFilter<"Bus"> | string
    model?: StringNullableFilter<"Bus"> | string | null
    manufacturer?: StringNullableFilter<"Bus"> | string | null
    yearOfMake?: IntNullableFilter<"Bus"> | number | null
    ownerName?: StringNullableFilter<"Bus"> | string | null
    createdAt?: DateTimeFilter<"Bus"> | Date | string
    updatedAt?: DateTimeFilter<"Bus"> | Date | string
    documents?: BusDocumentListRelationFilter
  }

  export type BusOrderByWithRelationInput = {
    id?: SortOrder
    registrationNo?: SortOrder
    model?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    yearOfMake?: SortOrderInput | SortOrder
    ownerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documents?: BusDocumentOrderByRelationAggregateInput
  }

  export type BusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    registrationNo?: string
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    model?: StringNullableFilter<"Bus"> | string | null
    manufacturer?: StringNullableFilter<"Bus"> | string | null
    yearOfMake?: IntNullableFilter<"Bus"> | number | null
    ownerName?: StringNullableFilter<"Bus"> | string | null
    createdAt?: DateTimeFilter<"Bus"> | Date | string
    updatedAt?: DateTimeFilter<"Bus"> | Date | string
    documents?: BusDocumentListRelationFilter
  }, "id" | "registrationNo">

  export type BusOrderByWithAggregationInput = {
    id?: SortOrder
    registrationNo?: SortOrder
    model?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    yearOfMake?: SortOrderInput | SortOrder
    ownerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusCountOrderByAggregateInput
    _avg?: BusAvgOrderByAggregateInput
    _max?: BusMaxOrderByAggregateInput
    _min?: BusMinOrderByAggregateInput
    _sum?: BusSumOrderByAggregateInput
  }

  export type BusScalarWhereWithAggregatesInput = {
    AND?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    OR?: BusScalarWhereWithAggregatesInput[]
    NOT?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bus"> | string
    registrationNo?: StringWithAggregatesFilter<"Bus"> | string
    model?: StringNullableWithAggregatesFilter<"Bus"> | string | null
    manufacturer?: StringNullableWithAggregatesFilter<"Bus"> | string | null
    yearOfMake?: IntNullableWithAggregatesFilter<"Bus"> | number | null
    ownerName?: StringNullableWithAggregatesFilter<"Bus"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bus"> | Date | string
  }

  export type DocumentTypeWhereInput = {
    AND?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    OR?: DocumentTypeWhereInput[]
    NOT?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    id?: StringFilter<"DocumentType"> | string
    name?: StringFilter<"DocumentType"> | string
    description?: StringNullableFilter<"DocumentType"> | string | null
    createdAt?: DateTimeFilter<"DocumentType"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentType"> | Date | string
    documents?: BusDocumentListRelationFilter
  }

  export type DocumentTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documents?: BusDocumentOrderByRelationAggregateInput
  }

  export type DocumentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    OR?: DocumentTypeWhereInput[]
    NOT?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    description?: StringNullableFilter<"DocumentType"> | string | null
    createdAt?: DateTimeFilter<"DocumentType"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentType"> | Date | string
    documents?: BusDocumentListRelationFilter
  }, "id" | "name">

  export type DocumentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentTypeCountOrderByAggregateInput
    _max?: DocumentTypeMaxOrderByAggregateInput
    _min?: DocumentTypeMinOrderByAggregateInput
  }

  export type DocumentTypeScalarWhereWithAggregatesInput = {
    AND?: DocumentTypeScalarWhereWithAggregatesInput | DocumentTypeScalarWhereWithAggregatesInput[]
    OR?: DocumentTypeScalarWhereWithAggregatesInput[]
    NOT?: DocumentTypeScalarWhereWithAggregatesInput | DocumentTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentType"> | string
    name?: StringWithAggregatesFilter<"DocumentType"> | string
    description?: StringNullableWithAggregatesFilter<"DocumentType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DocumentType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DocumentType"> | Date | string
  }

  export type BusDocumentWhereInput = {
    AND?: BusDocumentWhereInput | BusDocumentWhereInput[]
    OR?: BusDocumentWhereInput[]
    NOT?: BusDocumentWhereInput | BusDocumentWhereInput[]
    id?: StringFilter<"BusDocument"> | string
    busId?: StringFilter<"BusDocument"> | string
    docTypeId?: StringFilter<"BusDocument"> | string
    documentNumber?: StringNullableFilter<"BusDocument"> | string | null
    issueDate?: DateTimeNullableFilter<"BusDocument"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"BusDocument"> | Date | string | null
    fileUrl?: StringFilter<"BusDocument"> | string
    remarks?: StringNullableFilter<"BusDocument"> | string | null
    uploadedAt?: DateTimeFilter<"BusDocument"> | Date | string
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    docType?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
  }

  export type BusDocumentOrderByWithRelationInput = {
    id?: SortOrder
    busId?: SortOrder
    docTypeId?: SortOrder
    documentNumber?: SortOrderInput | SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    remarks?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    bus?: BusOrderByWithRelationInput
    docType?: DocumentTypeOrderByWithRelationInput
  }

  export type BusDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusDocumentWhereInput | BusDocumentWhereInput[]
    OR?: BusDocumentWhereInput[]
    NOT?: BusDocumentWhereInput | BusDocumentWhereInput[]
    busId?: StringFilter<"BusDocument"> | string
    docTypeId?: StringFilter<"BusDocument"> | string
    documentNumber?: StringNullableFilter<"BusDocument"> | string | null
    issueDate?: DateTimeNullableFilter<"BusDocument"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"BusDocument"> | Date | string | null
    fileUrl?: StringFilter<"BusDocument"> | string
    remarks?: StringNullableFilter<"BusDocument"> | string | null
    uploadedAt?: DateTimeFilter<"BusDocument"> | Date | string
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    docType?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
  }, "id">

  export type BusDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    busId?: SortOrder
    docTypeId?: SortOrder
    documentNumber?: SortOrderInput | SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    remarks?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: BusDocumentCountOrderByAggregateInput
    _max?: BusDocumentMaxOrderByAggregateInput
    _min?: BusDocumentMinOrderByAggregateInput
  }

  export type BusDocumentScalarWhereWithAggregatesInput = {
    AND?: BusDocumentScalarWhereWithAggregatesInput | BusDocumentScalarWhereWithAggregatesInput[]
    OR?: BusDocumentScalarWhereWithAggregatesInput[]
    NOT?: BusDocumentScalarWhereWithAggregatesInput | BusDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusDocument"> | string
    busId?: StringWithAggregatesFilter<"BusDocument"> | string
    docTypeId?: StringWithAggregatesFilter<"BusDocument"> | string
    documentNumber?: StringNullableWithAggregatesFilter<"BusDocument"> | string | null
    issueDate?: DateTimeNullableWithAggregatesFilter<"BusDocument"> | Date | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"BusDocument"> | Date | string | null
    fileUrl?: StringWithAggregatesFilter<"BusDocument"> | string
    remarks?: StringNullableWithAggregatesFilter<"BusDocument"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"BusDocument"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusCreateInput = {
    id?: string
    registrationNo: string
    model?: string | null
    manufacturer?: string | null
    yearOfMake?: number | null
    ownerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: BusDocumentCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateInput = {
    id?: string
    registrationNo: string
    model?: string | null
    manufacturer?: string | null
    yearOfMake?: number | null
    ownerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: BusDocumentUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfMake?: NullableIntFieldUpdateOperationsInput | number | null
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: BusDocumentUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfMake?: NullableIntFieldUpdateOperationsInput | number | null
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: BusDocumentUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateManyInput = {
    id?: string
    registrationNo: string
    model?: string | null
    manufacturer?: string | null
    yearOfMake?: number | null
    ownerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfMake?: NullableIntFieldUpdateOperationsInput | number | null
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfMake?: NullableIntFieldUpdateOperationsInput | number | null
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: BusDocumentCreateNestedManyWithoutDocTypeInput
  }

  export type DocumentTypeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: BusDocumentUncheckedCreateNestedManyWithoutDocTypeInput
  }

  export type DocumentTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: BusDocumentUpdateManyWithoutDocTypeNestedInput
  }

  export type DocumentTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: BusDocumentUncheckedUpdateManyWithoutDocTypeNestedInput
  }

  export type DocumentTypeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusDocumentCreateInput = {
    id?: string
    documentNumber?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    fileUrl: string
    remarks?: string | null
    uploadedAt?: Date | string
    bus: BusCreateNestedOneWithoutDocumentsInput
    docType: DocumentTypeCreateNestedOneWithoutDocumentsInput
  }

  export type BusDocumentUncheckedCreateInput = {
    id?: string
    busId: string
    docTypeId: string
    documentNumber?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    fileUrl: string
    remarks?: string | null
    uploadedAt?: Date | string
  }

  export type BusDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutDocumentsNestedInput
    docType?: DocumentTypeUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type BusDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    docTypeId?: StringFieldUpdateOperationsInput | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusDocumentCreateManyInput = {
    id?: string
    busId: string
    docTypeId: string
    documentNumber?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    fileUrl: string
    remarks?: string | null
    uploadedAt?: Date | string
  }

  export type BusDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    docTypeId?: StringFieldUpdateOperationsInput | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BusDocumentListRelationFilter = {
    every?: BusDocumentWhereInput
    some?: BusDocumentWhereInput
    none?: BusDocumentWhereInput
  }

  export type BusDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusCountOrderByAggregateInput = {
    id?: SortOrder
    registrationNo?: SortOrder
    model?: SortOrder
    manufacturer?: SortOrder
    yearOfMake?: SortOrder
    ownerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusAvgOrderByAggregateInput = {
    yearOfMake?: SortOrder
  }

  export type BusMaxOrderByAggregateInput = {
    id?: SortOrder
    registrationNo?: SortOrder
    model?: SortOrder
    manufacturer?: SortOrder
    yearOfMake?: SortOrder
    ownerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusMinOrderByAggregateInput = {
    id?: SortOrder
    registrationNo?: SortOrder
    model?: SortOrder
    manufacturer?: SortOrder
    yearOfMake?: SortOrder
    ownerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusSumOrderByAggregateInput = {
    yearOfMake?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DocumentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BusScalarRelationFilter = {
    is?: BusWhereInput
    isNot?: BusWhereInput
  }

  export type DocumentTypeScalarRelationFilter = {
    is?: DocumentTypeWhereInput
    isNot?: DocumentTypeWhereInput
  }

  export type BusDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    docTypeId?: SortOrder
    documentNumber?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    fileUrl?: SortOrder
    remarks?: SortOrder
    uploadedAt?: SortOrder
  }

  export type BusDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    docTypeId?: SortOrder
    documentNumber?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    fileUrl?: SortOrder
    remarks?: SortOrder
    uploadedAt?: SortOrder
  }

  export type BusDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    docTypeId?: SortOrder
    documentNumber?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    fileUrl?: SortOrder
    remarks?: SortOrder
    uploadedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusDocumentCreateNestedManyWithoutBusInput = {
    create?: XOR<BusDocumentCreateWithoutBusInput, BusDocumentUncheckedCreateWithoutBusInput> | BusDocumentCreateWithoutBusInput[] | BusDocumentUncheckedCreateWithoutBusInput[]
    connectOrCreate?: BusDocumentCreateOrConnectWithoutBusInput | BusDocumentCreateOrConnectWithoutBusInput[]
    createMany?: BusDocumentCreateManyBusInputEnvelope
    connect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
  }

  export type BusDocumentUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<BusDocumentCreateWithoutBusInput, BusDocumentUncheckedCreateWithoutBusInput> | BusDocumentCreateWithoutBusInput[] | BusDocumentUncheckedCreateWithoutBusInput[]
    connectOrCreate?: BusDocumentCreateOrConnectWithoutBusInput | BusDocumentCreateOrConnectWithoutBusInput[]
    createMany?: BusDocumentCreateManyBusInputEnvelope
    connect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusDocumentUpdateManyWithoutBusNestedInput = {
    create?: XOR<BusDocumentCreateWithoutBusInput, BusDocumentUncheckedCreateWithoutBusInput> | BusDocumentCreateWithoutBusInput[] | BusDocumentUncheckedCreateWithoutBusInput[]
    connectOrCreate?: BusDocumentCreateOrConnectWithoutBusInput | BusDocumentCreateOrConnectWithoutBusInput[]
    upsert?: BusDocumentUpsertWithWhereUniqueWithoutBusInput | BusDocumentUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: BusDocumentCreateManyBusInputEnvelope
    set?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    disconnect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    delete?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    connect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    update?: BusDocumentUpdateWithWhereUniqueWithoutBusInput | BusDocumentUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: BusDocumentUpdateManyWithWhereWithoutBusInput | BusDocumentUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: BusDocumentScalarWhereInput | BusDocumentScalarWhereInput[]
  }

  export type BusDocumentUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<BusDocumentCreateWithoutBusInput, BusDocumentUncheckedCreateWithoutBusInput> | BusDocumentCreateWithoutBusInput[] | BusDocumentUncheckedCreateWithoutBusInput[]
    connectOrCreate?: BusDocumentCreateOrConnectWithoutBusInput | BusDocumentCreateOrConnectWithoutBusInput[]
    upsert?: BusDocumentUpsertWithWhereUniqueWithoutBusInput | BusDocumentUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: BusDocumentCreateManyBusInputEnvelope
    set?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    disconnect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    delete?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    connect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    update?: BusDocumentUpdateWithWhereUniqueWithoutBusInput | BusDocumentUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: BusDocumentUpdateManyWithWhereWithoutBusInput | BusDocumentUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: BusDocumentScalarWhereInput | BusDocumentScalarWhereInput[]
  }

  export type BusDocumentCreateNestedManyWithoutDocTypeInput = {
    create?: XOR<BusDocumentCreateWithoutDocTypeInput, BusDocumentUncheckedCreateWithoutDocTypeInput> | BusDocumentCreateWithoutDocTypeInput[] | BusDocumentUncheckedCreateWithoutDocTypeInput[]
    connectOrCreate?: BusDocumentCreateOrConnectWithoutDocTypeInput | BusDocumentCreateOrConnectWithoutDocTypeInput[]
    createMany?: BusDocumentCreateManyDocTypeInputEnvelope
    connect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
  }

  export type BusDocumentUncheckedCreateNestedManyWithoutDocTypeInput = {
    create?: XOR<BusDocumentCreateWithoutDocTypeInput, BusDocumentUncheckedCreateWithoutDocTypeInput> | BusDocumentCreateWithoutDocTypeInput[] | BusDocumentUncheckedCreateWithoutDocTypeInput[]
    connectOrCreate?: BusDocumentCreateOrConnectWithoutDocTypeInput | BusDocumentCreateOrConnectWithoutDocTypeInput[]
    createMany?: BusDocumentCreateManyDocTypeInputEnvelope
    connect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
  }

  export type BusDocumentUpdateManyWithoutDocTypeNestedInput = {
    create?: XOR<BusDocumentCreateWithoutDocTypeInput, BusDocumentUncheckedCreateWithoutDocTypeInput> | BusDocumentCreateWithoutDocTypeInput[] | BusDocumentUncheckedCreateWithoutDocTypeInput[]
    connectOrCreate?: BusDocumentCreateOrConnectWithoutDocTypeInput | BusDocumentCreateOrConnectWithoutDocTypeInput[]
    upsert?: BusDocumentUpsertWithWhereUniqueWithoutDocTypeInput | BusDocumentUpsertWithWhereUniqueWithoutDocTypeInput[]
    createMany?: BusDocumentCreateManyDocTypeInputEnvelope
    set?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    disconnect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    delete?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    connect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    update?: BusDocumentUpdateWithWhereUniqueWithoutDocTypeInput | BusDocumentUpdateWithWhereUniqueWithoutDocTypeInput[]
    updateMany?: BusDocumentUpdateManyWithWhereWithoutDocTypeInput | BusDocumentUpdateManyWithWhereWithoutDocTypeInput[]
    deleteMany?: BusDocumentScalarWhereInput | BusDocumentScalarWhereInput[]
  }

  export type BusDocumentUncheckedUpdateManyWithoutDocTypeNestedInput = {
    create?: XOR<BusDocumentCreateWithoutDocTypeInput, BusDocumentUncheckedCreateWithoutDocTypeInput> | BusDocumentCreateWithoutDocTypeInput[] | BusDocumentUncheckedCreateWithoutDocTypeInput[]
    connectOrCreate?: BusDocumentCreateOrConnectWithoutDocTypeInput | BusDocumentCreateOrConnectWithoutDocTypeInput[]
    upsert?: BusDocumentUpsertWithWhereUniqueWithoutDocTypeInput | BusDocumentUpsertWithWhereUniqueWithoutDocTypeInput[]
    createMany?: BusDocumentCreateManyDocTypeInputEnvelope
    set?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    disconnect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    delete?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    connect?: BusDocumentWhereUniqueInput | BusDocumentWhereUniqueInput[]
    update?: BusDocumentUpdateWithWhereUniqueWithoutDocTypeInput | BusDocumentUpdateWithWhereUniqueWithoutDocTypeInput[]
    updateMany?: BusDocumentUpdateManyWithWhereWithoutDocTypeInput | BusDocumentUpdateManyWithWhereWithoutDocTypeInput[]
    deleteMany?: BusDocumentScalarWhereInput | BusDocumentScalarWhereInput[]
  }

  export type BusCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<BusCreateWithoutDocumentsInput, BusUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: BusCreateOrConnectWithoutDocumentsInput
    connect?: BusWhereUniqueInput
  }

  export type DocumentTypeCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DocumentTypeCreateWithoutDocumentsInput, DocumentTypeUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocumentsInput
    connect?: DocumentTypeWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BusUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<BusCreateWithoutDocumentsInput, BusUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: BusCreateOrConnectWithoutDocumentsInput
    upsert?: BusUpsertWithoutDocumentsInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutDocumentsInput, BusUpdateWithoutDocumentsInput>, BusUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentTypeUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<DocumentTypeCreateWithoutDocumentsInput, DocumentTypeUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocumentsInput
    upsert?: DocumentTypeUpsertWithoutDocumentsInput
    connect?: DocumentTypeWhereUniqueInput
    update?: XOR<XOR<DocumentTypeUpdateToOneWithWhereWithoutDocumentsInput, DocumentTypeUpdateWithoutDocumentsInput>, DocumentTypeUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BusDocumentCreateWithoutBusInput = {
    id?: string
    documentNumber?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    fileUrl: string
    remarks?: string | null
    uploadedAt?: Date | string
    docType: DocumentTypeCreateNestedOneWithoutDocumentsInput
  }

  export type BusDocumentUncheckedCreateWithoutBusInput = {
    id?: string
    docTypeId: string
    documentNumber?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    fileUrl: string
    remarks?: string | null
    uploadedAt?: Date | string
  }

  export type BusDocumentCreateOrConnectWithoutBusInput = {
    where: BusDocumentWhereUniqueInput
    create: XOR<BusDocumentCreateWithoutBusInput, BusDocumentUncheckedCreateWithoutBusInput>
  }

  export type BusDocumentCreateManyBusInputEnvelope = {
    data: BusDocumentCreateManyBusInput | BusDocumentCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type BusDocumentUpsertWithWhereUniqueWithoutBusInput = {
    where: BusDocumentWhereUniqueInput
    update: XOR<BusDocumentUpdateWithoutBusInput, BusDocumentUncheckedUpdateWithoutBusInput>
    create: XOR<BusDocumentCreateWithoutBusInput, BusDocumentUncheckedCreateWithoutBusInput>
  }

  export type BusDocumentUpdateWithWhereUniqueWithoutBusInput = {
    where: BusDocumentWhereUniqueInput
    data: XOR<BusDocumentUpdateWithoutBusInput, BusDocumentUncheckedUpdateWithoutBusInput>
  }

  export type BusDocumentUpdateManyWithWhereWithoutBusInput = {
    where: BusDocumentScalarWhereInput
    data: XOR<BusDocumentUpdateManyMutationInput, BusDocumentUncheckedUpdateManyWithoutBusInput>
  }

  export type BusDocumentScalarWhereInput = {
    AND?: BusDocumentScalarWhereInput | BusDocumentScalarWhereInput[]
    OR?: BusDocumentScalarWhereInput[]
    NOT?: BusDocumentScalarWhereInput | BusDocumentScalarWhereInput[]
    id?: StringFilter<"BusDocument"> | string
    busId?: StringFilter<"BusDocument"> | string
    docTypeId?: StringFilter<"BusDocument"> | string
    documentNumber?: StringNullableFilter<"BusDocument"> | string | null
    issueDate?: DateTimeNullableFilter<"BusDocument"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"BusDocument"> | Date | string | null
    fileUrl?: StringFilter<"BusDocument"> | string
    remarks?: StringNullableFilter<"BusDocument"> | string | null
    uploadedAt?: DateTimeFilter<"BusDocument"> | Date | string
  }

  export type BusDocumentCreateWithoutDocTypeInput = {
    id?: string
    documentNumber?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    fileUrl: string
    remarks?: string | null
    uploadedAt?: Date | string
    bus: BusCreateNestedOneWithoutDocumentsInput
  }

  export type BusDocumentUncheckedCreateWithoutDocTypeInput = {
    id?: string
    busId: string
    documentNumber?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    fileUrl: string
    remarks?: string | null
    uploadedAt?: Date | string
  }

  export type BusDocumentCreateOrConnectWithoutDocTypeInput = {
    where: BusDocumentWhereUniqueInput
    create: XOR<BusDocumentCreateWithoutDocTypeInput, BusDocumentUncheckedCreateWithoutDocTypeInput>
  }

  export type BusDocumentCreateManyDocTypeInputEnvelope = {
    data: BusDocumentCreateManyDocTypeInput | BusDocumentCreateManyDocTypeInput[]
    skipDuplicates?: boolean
  }

  export type BusDocumentUpsertWithWhereUniqueWithoutDocTypeInput = {
    where: BusDocumentWhereUniqueInput
    update: XOR<BusDocumentUpdateWithoutDocTypeInput, BusDocumentUncheckedUpdateWithoutDocTypeInput>
    create: XOR<BusDocumentCreateWithoutDocTypeInput, BusDocumentUncheckedCreateWithoutDocTypeInput>
  }

  export type BusDocumentUpdateWithWhereUniqueWithoutDocTypeInput = {
    where: BusDocumentWhereUniqueInput
    data: XOR<BusDocumentUpdateWithoutDocTypeInput, BusDocumentUncheckedUpdateWithoutDocTypeInput>
  }

  export type BusDocumentUpdateManyWithWhereWithoutDocTypeInput = {
    where: BusDocumentScalarWhereInput
    data: XOR<BusDocumentUpdateManyMutationInput, BusDocumentUncheckedUpdateManyWithoutDocTypeInput>
  }

  export type BusCreateWithoutDocumentsInput = {
    id?: string
    registrationNo: string
    model?: string | null
    manufacturer?: string | null
    yearOfMake?: number | null
    ownerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusUncheckedCreateWithoutDocumentsInput = {
    id?: string
    registrationNo: string
    model?: string | null
    manufacturer?: string | null
    yearOfMake?: number | null
    ownerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusCreateOrConnectWithoutDocumentsInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutDocumentsInput, BusUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentTypeCreateWithoutDocumentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentTypeUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentTypeCreateOrConnectWithoutDocumentsInput = {
    where: DocumentTypeWhereUniqueInput
    create: XOR<DocumentTypeCreateWithoutDocumentsInput, DocumentTypeUncheckedCreateWithoutDocumentsInput>
  }

  export type BusUpsertWithoutDocumentsInput = {
    update: XOR<BusUpdateWithoutDocumentsInput, BusUncheckedUpdateWithoutDocumentsInput>
    create: XOR<BusCreateWithoutDocumentsInput, BusUncheckedCreateWithoutDocumentsInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutDocumentsInput, BusUncheckedUpdateWithoutDocumentsInput>
  }

  export type BusUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfMake?: NullableIntFieldUpdateOperationsInput | number | null
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNo?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfMake?: NullableIntFieldUpdateOperationsInput | number | null
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeUpsertWithoutDocumentsInput = {
    update: XOR<DocumentTypeUpdateWithoutDocumentsInput, DocumentTypeUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DocumentTypeCreateWithoutDocumentsInput, DocumentTypeUncheckedCreateWithoutDocumentsInput>
    where?: DocumentTypeWhereInput
  }

  export type DocumentTypeUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DocumentTypeWhereInput
    data: XOR<DocumentTypeUpdateWithoutDocumentsInput, DocumentTypeUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentTypeUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusDocumentCreateManyBusInput = {
    id?: string
    docTypeId: string
    documentNumber?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    fileUrl: string
    remarks?: string | null
    uploadedAt?: Date | string
  }

  export type BusDocumentUpdateWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    docType?: DocumentTypeUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type BusDocumentUncheckedUpdateWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    docTypeId?: StringFieldUpdateOperationsInput | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusDocumentUncheckedUpdateManyWithoutBusInput = {
    id?: StringFieldUpdateOperationsInput | string
    docTypeId?: StringFieldUpdateOperationsInput | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusDocumentCreateManyDocTypeInput = {
    id?: string
    busId: string
    documentNumber?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    fileUrl: string
    remarks?: string | null
    uploadedAt?: Date | string
  }

  export type BusDocumentUpdateWithoutDocTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type BusDocumentUncheckedUpdateWithoutDocTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusDocumentUncheckedUpdateManyWithoutDocTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    busId?: StringFieldUpdateOperationsInput | string
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}