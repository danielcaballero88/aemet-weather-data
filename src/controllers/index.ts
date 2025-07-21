import { Request, Response } from "express";

export class IndexController {
  public getItems(req: Request, res: Response) {
    // Logic to retrieve items
    res.send("List of items");
  }

  public createItem(req: Request, res: Response) {
    // Logic to create a new item
    res.send("Item created");
  }
}
