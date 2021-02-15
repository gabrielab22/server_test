import { Router } from "express";

export const cars = Router();

cars.get("/", async (req, res, next) => {
  return res.status(200).json({
    Mercedes: {
      AClass: { color: "red", doors: "5" },
      BClass: { color: "green", doors: "4" },
      CClass: { color: "blue", doors: "3" },
    },
    Audi: {
      A5: { color: "red", doors: "5" },
      A6: { color: "green", doors: "4" },
      A7: { color: "blue", doors: "3" },
    },
    BMW: {
      M3: { color: "red", doors: "5" },
      M4: { color: "green", doors: "4" },
      M5: { color: "blue", doors: "3" },
    },
  });
});
