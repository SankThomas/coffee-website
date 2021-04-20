import { v4 as uuidv4 } from "uuid"

export const pricing = [
  {
    id: uuidv4(),
    title: "Basic",
    price: "$ 99",
    services: [
      "Something",
      "Something else",
      "Something else here",
      "Even something else",
    ],
    button: "Get Basic",
  },
  {
    id: uuidv4(),
    title: "Master",
    price: "$ 199",
    services: [
      "Something",
      "Something else",
      "Something else here",
      "Even something else",
      "Master maintenance",
      "5% discount",
    ],
    button: "Get Master",
  },
  {
    id: uuidv4(),
    title: "Professional",
    price: "$ 299",
    services: [
      "Something",
      "Something else",
      "Something else here",
      "Even something else",
      "Professional maintenance",
      "25% discount",
    ],
    button: "Get Professional",
  },
]
