declare const getAll: () => any[];
declare const getById: (id: number) => any;
declare const create: (title: string) => any;
declare const update: (id: number, newTitel: string, completed: boolean) => any;
declare const remove: (id: number) => "id is not found" | undefined;
export { getAll, getById, create, update, remove };
//# sourceMappingURL=task.model.d.ts.map