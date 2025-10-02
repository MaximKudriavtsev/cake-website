import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ольга",
  lastName: "Крапивина",
  name: `Ольга Крапивина`,
  role: "Шеф-кондитер",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Europe/Moscow", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Заказать эксклюзивные десерты</>,
  description: <>Оставьте свои контактные данные и наш менеджер свяжется с вами для уточнения деталей заказа в ближайшее время</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/olya_sugar_mommy",
  },
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system",
  // },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/once-ui/",
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  // {
  //   name: "Email",
  //   icon: "email",
  //   link: `mailto:${person.email}`,
  // },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Авторская кондитерская | ${person.name}`,
  description: `Архитектор вашего сладкого праздника ✨ Шеф-кондитер, блогер, автор курсов для начинающих и опытных кондитеров`,
  headline: <>Авторская мастерская шеф-кондитера Ольги Крапивиной</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Создаю сладкие эмоции: от камерных бэнто-тортов до масштабных свадебных конструкций. Ваш уникальный вкус и стиль — в основе каждого рецепта.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Ольга Крапивина",
  title: `${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Об авторе",
    description: (
      <>
        <span>
          Ольга Крапивина — шеф-кондитер, который видит в десерте искусство.
        </span>
        <span>
        Ее философия проста: безупречный вкус рождается из синергии авторского дизайна и высочайшего качества ингредиентов. Именно поэтому в основе ее десертов лежат свежие фермерские продукты, отвечающие за чистоту и насыщенность вкуса.
        </span>
        <span>
        Ольга работает с каждым клиентом как с соавтором, превращая личные истории и пожелания в съедобные шедевры. Будь то нежный бэнто-торт для одного или сложная многоярусная конструкция для свадьбы, каждый проект — это воплощение индивидуальности заказчика и профессионального мастерства кондитера.
        </span>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Опыт работы",
    experiences: [
      {
        company: "Авторская кондитерская",
        timeframe: "2020 - Настоящее время",
        role: "Шеф-кондитер",
        achievements: [
          <>
            <span>
              Шеф-кондитер с более чем 5 летним опытом создания изысканных авторских десертов. Ее профессиональный путь охватывает все уровни кондитерского искусства: от разработки уникальных рецептов до управления собственной авторской мастерской.
              Ольга успешно реализовала сотни проектов, включая:
            </span>
            <br/>
            <br/>
            <span>
              Создание сложных многоярусных свадебных тортов и десертных конструкций.
            </span>
            <br/>
            <br/>
            <span>
              Разработку линеек бэнто-тортов и капкейков, ставших визитной карточкой мастерской.
            </span>
            <br/>
            <br/>
            <span>
              Регулярное выполнение крупных корпоративных заказов для ведущих компаний.
              Ее работы отличаются безупречным вкусом, вниманием к деталям и глубоко индивидуальным подходом к пожеланиям каждого заказчика.
            </span>
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Образование и дипломы",
    institutions: [
      {
        name: "Технология продукции общественного питания",
        description:
          <>
            <span>
              Ольга постоянно совершенствует свое мастерство, совмещая фундаментальное образование с обучением у ведущих экспертов индустрии.
            </span>
            <br/>
            <br/>

            <span>
            Основное образование: [Название учебного заведения, специальность "Технология продукции общественного питания" или "Повар-кондитер", год окончания].
            </span>
            <br/>
            <br/>

            <span>
            Повышение квалификации и мастер-классы: Участие в профильных фестивалях и мастер-классах, таких как Moscow Cake Show, где перенимается опыт лучших шеф-кондитеров страны по работе с современными техниками и трендами .
            </span>
            <br/>
            <br/>

            <span>
            Сертификаты: [Перечислить названия конкретных курсов, семинаров или программ, например: "Современные техники работы с шоколадом", "Авторский декор из сахарной мастики"].
            </span>
            <br/>
            <br/>

            <span>
            Самообразование: Активное изучение профессиональной литературы и ресурсов, от классических трудов по кулинарии до современных блогов о фуд-фотографии и продвижении .
            </span>
          </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Навыки и умения",
    skills: [
      {
        title: "Высокое кондитерское мастерство",
        description: (
          <>Создание муссовых, бисквитных, чизкейков и других видов тортов любой сложности. Владение техниками работы с шоколадом, карамелью, мастикой и сахарной глазурью.</>
        ),
        tags: [],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Индивидуальный дизайн",
        description: (
          <>Способность воплотить в десерте любую идею — от нежных цветочных композиций до сложных тематических конструкций.</>
        ),
        tags: [],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },  
      {
        title: "Работа с качественными ингредиентами",
        description: (
          <>Понимание свойств продуктов и принципов вкусового баланса. Ольга делает осознанный выбор в пользу свежих и фермерских продуктов для достижения чистого и насыщенного вкуса.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Управление проектами и клиентский сервис",
        description: (
          <>Организация всего процесса "под ключ" — от обсуждения идеи и создания эскиза до своевременной доставки готового десерта.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Бизнес-навыки",
        description: (
          <>Опыт ведения переговоров с корпоративными клиентами, формирования коммерческих предложений и эффективной организации рабочего процесса.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Проекты",
  title: `Проекты – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Галерея",
  title: `Галерея работ – ${person.name}`,
  description: `Коллекция работ шеф-кондитера Ольги Крапивиной`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/cakes/cake-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/cakes/cake-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/cakes/cake-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/cakes/cake-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/cakes/cake-5.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/cakes/cake-6.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/cakes/cake-7.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/cakes/cake-8.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/cakes/cake-9.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
