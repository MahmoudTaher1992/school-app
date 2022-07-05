interface School {
  id: number;
  name: string;
  address?: string;
}

export const schools: School[] = [
  { id: 1, name: "School 1", address: "School Address 1" },
  { id: 2, name: "School 2", address: "School Address 2" },
];
