import {
  ObjectLiteral,
  EntityManager,
  EntityTarget,
  Repository,
} from "typeorm";

export function getRepositories<T extends ObjectLiteral[]>(
  entityManager: EntityManager,
  entities: [...{ [K in keyof T]: EntityTarget<T[K]> }]
): { [K in keyof T]: Repository<T[K]> } {
  return entities.map((e) => entityManager.getRepository(e)) as any;
}
