export type EventType = {
  title: string,
  date: Date,
  location?: string,
  description?: string, //probably a separate component later on
  image?: string,
  children?: React.ReactNode, //this is sus
};

