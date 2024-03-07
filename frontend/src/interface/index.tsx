import {ChangeEvent} from "react";

export interface LabelInputType {
  type: string;
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent) => void;
}


export interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export interface Blog {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  }
}
