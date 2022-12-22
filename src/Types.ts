export type EventType = {
  id: number;
  title: string;
  date: string;
  description: string;
  imageSource: string;
  imageLabel: string;
  children?: React.ReactNode; //this is sus
};

export type StaffType = {
  id: number;
  title: string;
  year: number;
  name: string;
  email: string;
  imageSource: string;
};
