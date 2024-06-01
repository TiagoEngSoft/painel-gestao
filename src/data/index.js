import moment from "moment/moment";

export const cardsData = [
  {
    title: "Receita",
    change: 24,
    amount: 42056,
  },
  {
    title: "Pedidos",
    change: -14,
    amount: 52125.03,
  },
  {
    title: "Despesas",
    change: 18,
    amount: 1216.5,
  },
  {
    title: "Lucro",
    change: 12,
    amount: 10125.0,
  },
];

export const ordersData = [
  {
    name: "Skateboard",
    type: "Esporte",
    items: 58,
    change: 290,
  },
  {
    name: "Curso de Java",
    type: "Curso",
    items: 12,
    change: 72
  },
  {
    name: "Consultoria",
    type: "Humano",
    items: 7,
    change: 70
  },
  {
    name: "Pac Man",
    type: "Game",
    items: 21,
    change: 15
  }
]


//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("pt", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Pausa para o café',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Reunião da tarde com café',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Reunião com a gestão ",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "Café com o gurpo da infra",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Lançamento aplicação ",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "Reunião no Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}


// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Todas",
      cards: [
        {
          id: 1,
          title: "Configurar banco",
          description: "Integração com o Firebase"
        },
        {
          id: 2,
          title: "Modelo de dados",
          description: "Ver os diagramas com Jorge - Dev Sênior"
        },
      ]
    },
    {
      id: 2,
      title: "Prioridade",
      cards: [
        {
          id: 9,
          title: "Paradigma declarativo-reativo para o CRUD de dados",
          description: "Olhar como o PHP",
        }
      ]
    },
    {
      id: 3,
      title: "Fazendo",
      cards: [
        {
          id: 10,
          title: "Eventos",
          description: "Marcar o evento de Java Spring"
        },
        {
          id: 11,
          title: "Automação do Deploy",
          description: "Criar pipeline com o jenkins"
        }
      ]
    },
    {
      id: 4,
      title: "Finalizadas",
      cards: [
        {
          id: 12,
          title: "Inicialização ",
          description: "Configurar os módulos"
        },
        {
          id: 13,
          title: "Decidir a arquitetura",
          description: "Arquitetura modular - para cada micro serviço"
        }
      ]
    }
  ]
}


// * user table data
export const userData = [
  {
    name: {
      firstName: 'José',
      lastName: 'Manuel',
    },
    address: '261 Erdman Ford',
    city: 'Juazeiro do Norte',
    state: 'Ceará',
  },
  {
    name: {
      firstName: 'Janaina',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Juazeiro do Norte',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Juazeiro do Norte',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Marcos',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  }, {
    name: {
      firstName: 'Rafael',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ceará',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'Juazeiro do Norte',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Ceará',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'Ceará',
  },
]
