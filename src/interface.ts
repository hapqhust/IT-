import React from "react";

export interface DishInfo{
  id: string,
  image: string,
  name: string,
  description: string,
  price: number,
  count?: number
}

