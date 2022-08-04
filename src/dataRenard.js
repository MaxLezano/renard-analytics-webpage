import ICONS from "./assets/images/icons";

const carousel = [
  {
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "titleCarousel1",
    description: "descriptionCarousel1",
    order: "1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "titleCarousel2",
    description: "descriptionCarousel2",
    order: "2",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_960_720.jpg",
    title: "titleCarousel3",
    description: "descriptionCarousel3",
    order: "3",
  },
];

const ourValues = [
  {
    image: ICONS.simpleIcon,
    title: "card1title",
    description: "card1desc",
  },
  {
    image: ICONS.reliableIcon,
    title: "card2title",
    description: "card2desc",
  },
  {
    image: ICONS.shieldIcon,
    title: "card3title",
    description: "card3desc",
  },
  {
    image: ICONS.customizeIcon,
    title: "card4title",
    description: "card4desc",
  },
  {
    image: ICONS.fastIcon,
    title: "card5title",
    description: "card5desc",
  },
  {
    image: ICONS.supportIcon,
    title: "card6title",
    description: "card6desc",
  },
];

const profiles = [
  {
    image: "https://i.ibb.co/GCkn0XL/1567832611413.jpg",
    title: "CO-FOUNDER",
    name: "Facundo Esquivel Fagiani",
    url: "https://www.linkedin.com/in/facufref/",
  },
  {
    image: "https://i.ibb.co/7GZrM2M/1567704239574.jpg",
    title: "CO-FOUNDER",
    name: "Gerardo Gutierrez",
    url: "https://www.linkedin.com/in/ggutz/",
  },
  {
    image: "https://i.ibb.co/jVbsf3R/1619449910370.jpg",
    title: "CO-FOUNDER",
    name: "Kemel Hallar",
    url: "https://www.linkedin.com/in/kemelhallar/",
  },
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAkFBMVEX///oDAwMAAAD///////zp6eb6+vbDw8FxcXD5+fWmpqT09PA3NzbLy8g8PDtkZGIwMC+Dg4F8fHoPDw+UlJLl5eLv7+vR0c4bGxpHR0a1tbJQUE8rKypBQUBbW1qIiIaqqqja2tcZGRmdnZtqamhXV1Z3d3W8vLkjIyOWlpOpqajPz8sTExTHx8OysrHd3dzxPT+BAAAMAUlEQVR4nO1da5uiPA92moIieBoVzzqKirPjjP//370cBJMCDuo8Gni5P+y164HtbdM0SZO0VqtQoUKFChUqVKhQoUKFCv/fkDXpIfjD+/PVo/kzSABTU2CAh8JThNraWY6Fgvny3Zm2bJ/iqwd4NySMliqvC/rtxurbKCg9MFcehbcMhATbq6lZPHYS6t1sZohg90cWjJ00t78yi+hNPgo1d9Jc5KMWsjsWiJ20l3mZneltBgVhB5p1E7WAnVWXBdjzQGvfSi1gtzfZk5Pa4g5qPrmdwZ6cutZSNu4Mckvj1WO/DpjSoXsWyLaB0GkfMwmKDuuJk6eNQm15AgLdXrvOcjZOYSdEk7O2lFQixeYjqf6k7wdo7naTYCfEkO/MKRIpNqOsiZAevaTBKZZPHe4tkHafULPWAbUMd03CqSfU1fnBVSphS6jNbH+gYLS+R+n+tucGWQq5MVOppBIpxCmg5h68yVms0+cD5KdCbqk/d9D5ILUDofbp05Etf+xCHJLzETre4NAlKhyOUgk9Msh9QEbOwhfFShky2O607lvI0FTITfmRk9oYT9sklC3jPHAxo/MGbtcX1S+f3NeMOzlPuPAAW+EAM7jByNeQIlQdYLYpuRM3cuYcc3s/Dy+L2+788rv/MqypWM6Y6RNv2aDRWfaZSszNMvGn9ejlRUAD/lENO+A1cUZXoMG50eBibmKNJ07hVpMdMnFHjdMuBy7+4Xfx0Iy3fNw0KpWsJg4aeNoumg46ubjV4IdK5YjRxAHytoV10QWR9hRjG388wa0mB4TcntHEAVLjeIOS9iE0TKiUJbnV4B2RExtGqhJxEwKPC1q+PSn2SrxgHG0Nl5eMCRbrNRuhxLqAcquB1tz3vpXPe5MUfhRZj8TUjjfI10MOEbex8h4kj6Pk8BDYJRMbTw+euDEboSTctjl+cnnyD7C2ZB+DDyyUduZ3nwzCLZc4STlca4pDbiK3nc8ucDs3n536Cvbb+UQXCLeOMioJhlHLM1JPm1y4NVhyEydq82s9y9q5OURMIn9ALDhyU4RSnrpBHPkzx1hNjtxqBooniznZqDsifTcGqauSKvscueFgCbF05SkyrxQVozuW6H4qZzcsudXst3ShjNeQEirQt4Gk7vAUS5ulTNZghbgdLxG7i34QM/0ySd4+Ld7UkB3RJRNG3OrYRblY/bFM+gYLOtWOYnsWfkYL/T5LPtyoptxc4sh6bCV65uNXZFlGkSPizMA3S2OZet4oGFSDAdYy7U/bP6LyWEQ+axY3TmdxckQc53l8NG9amJw3eZ2p7UZbBp23KVNuaqwqtrxgeCBvkCNh7JzWAJ1Min+cuMVydqZQj8nVE2eIl7+hWAMJdl2+zgM0rm/FUuntDxl5GWSbx1F3z3/j4uMEoBPnSaUd/fR6LyvxooEY6DhWNn8JhWxglRgkMsU7AYxSs9fwJu/vboibeqb1coCSpuApu/PYQTbHybyEPj7rhz0WyRMrkaz5BuFCIdeI5RLMwZgkzSgnxeT8jmMajZqDhxPsJGif21n/kvq0MjA1/T31sIQRyKIJh7kdRuOUALrmZwX5aCi5JzhTVnTN5KNfD3rqHZA7fqB4lscvLIOgoSAgmlT0GE6bn887SagM4gCkfgnoSYfIzCd6LaSdSHsVouuaV2o5QOvQnZFt6hMMk+nzQhwGw4xKByl/aNqa4GZvIajTEI7X2w9aenLMEux3Vf0w3ABiyJqTYoX47o2r08Q1AK2pzrIQGQlSTABf83R2i179ZMSZa7bbSGRR8tzbMMBOrewIDZPjsR8iJbk3zrphDAnf7VTj/3pathDf7KnVfAMyy7PJBuPkUAoJrfSpy6Z25JenloWgCO6GSevy1pAU3qqbpxc7pGnR94JUHEUA48NKr3RQmc1/t0ZUC/u/hvyt7hdq9c6V8swzM7H61Z7W9eGoNbKfV2QM2nTgfK/NIOU/6zOwXh2usBNBNP3KkL1H26PBwvLrXQ6DpxVcNYO0H2F5zuZ0aMvMWgD73zyjCsfD0k2xNC8Au7nsXvbE2XPCezKszYg24rFP0DDShFSC2ezQKpzzt+aD9ZWTfu/Xsp0DjbM0nsFNtlLGujns984ohSCA+dVEJ6P9trXYN+tGpjT6S3no7lVxfk6yFz0CwAS96dg7wxR6l2CWaIeVValP9t8wT9PeMdUwy5MX8CiMQ6aCCPi9/6xNugQl4maljDDUuqb2/bHaHbIKAZ8STjFTtmCFX7ezckdmXG90hZtPy9C+3ea+EymOrOc+I+VX/7UiOBxjt9P7Gfqn3UQmz9z8DdkXzWHL2bfj1hJXn9l6wnpLBOyuEOxb7Xa709xgbsFys4frr6nTiIo1czxu8t8zUw65c/AjYxdz98fZzqx+8q3rDzo+JyfWz1W91UdL0s1Py8du+CSLOuh3kXtwj8D/Tw6L2WdGneB/Qs7+6U3m81t+/juZWb2p7R92PYtZwA500xw1t43ZTQJ2I7PFP+NVbYYCLW6PPhqz9p/yCx/W39avGtPPIBgw1Ib11SQtPHcXLXHYNU8mm8ZCPkPz09rcO4GRaPcXDefL5tfxyvOS7S/XWR5uW4IRq/Gu4dSHOj9eEfyR2euP/SyPIRXxmmyb7lqza3xpxZB+pEE71QdLq9tNpXfZv62G0/KsTo9UEXrQRAj8HL02/GhYSV+2v9uvPpv10bCWFZEoAvyxIz9AzJaOW7dl6KIWaa7SIbuIm1aKtn8xANdKscv9eQyk5OYZLuYTQdLR2eWjPQZc4i665Zo3WpTEqkT9ccg54vZdLm4oxZJjN4+HQJKSeaak3Q34QguOTW3i34BUguepKC4SMLc28+5+twJzG7Mp4v4boCqAgiQB5QegMzvxUzJuToktStR9p2yKkmxwu3IZXVJDx/lzXtVSD8PEYQWmyfL3QuKWUKwqLx8HcU87rx7N3wIX3TItvLkfNnZP+fRz+hPoOI7Hsk3o/SCxrrK5p6gmumzcSLuLMnM7lMs9JdxKFjjHFiW73gKPgvSEKBu3ZsWtiKi4FRMVt2Ki5NxE+bmJMnIrr0w6JeY2K20UT2pHxK1c58LkZhUxKxU3kyZRlilsrl7IZZXovEOSW6tKFTfH529nqWR1O8cjMBLXaHLuD3QTYKtS88htSrHkzr2HVXKcGtfeCxj2U6iVI9FE36XXdohx4aWStoYj5HavHtuDALVFAf5HsQ89pN0lBsmMkitIF6R0yD2hNjfpJYZvBTYs1eu06kCuw3sTXXb39eUFrXMPDC3K1iP3rMrtPwftLD0LzhQbRG2KeTHJKZ1B+0GdkTRnlFy/SA26IqjNzs9JoUof90I6c1Kj6j/Om1T6hL+JJf+b5RXoHUX9xwQU41mEt4IWCGobXtxiUmlSn++SID5QL4hW/Oy9Qq5IaVBwooNPXDv7rpDbs7nX7lfopJt02nXXKrnGK4Z5D+iCSnVDqaopTnSI3taRvprURuEeuSJoS3VnS+8LTS//DraCAswcjbSKQ4bdASNROLGkN8ZfCf6Dq5JzmIslvXX86mTQXyEQS97mFw0ii+W1jQvco0JuaTOWS9pTToyTOxv5dEudOYuvy6Oq/99KntU1x9ifkxqNh/x+J7e65jy9yrV0nzo23RxWItQ3CjmeMVlwcqp/8qXEmuO4z6lB5JyeS3Ir4HcMIpXgY+6DX6mcGYguuxAKPUMU8/w6QYla8iu4VW2tWy6qgPWYunO8guny9HbPYjvDv2GH8ZLb5nBssqFs4uQKvFeDji3TsckGPfLJs+0/DUpW0+0iJY0llUo2zQlIPPW+3Vfq1IM4aEzI2VjPXXdsMkE9vzcx4bHL4ZrL1JBdvqfQnttiyYKbSSTy3rxWaSr3UnJIkMU3Ht+jIyPIIV1ybwzcHXpP6QPZB+o9tww8AonvtG4/8iQlJNF++TEBvYD9wbvc8JGx6L9cKCU6tRHisZ9a2ujImAM30qTqwdHACDVysV5fLo0qGx6P6iMTh4Mfd1Fvf9LlonF+mjg87a6mK/BPt0P8QQ9GabyHz2KSVwNu0Gh/8je3QkJr253PHC6HA6CP6vXRlVumbnsa6LpkMWkhity+u0KFChUqVKhQoUKFCiXA/wCFkpuuHejB3QAAAABJRU5ErkJggg==",
    title: "SOFTWARE DEVELOPER",
    name: "German Eliseo Vera",
    url: "https://www.linkedin.com/in/g-e-v/",
  },
  {
    image:
      "data:image/png;base64,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",
    title: "SOFTWARE DEVELOPER",
    name: "Marcos David Cortez",
    url: "https://www.linkedin.com/in/marcos-david-cortez-rodriguez-30094b171/",
  },
  {
    image:
      "data:image/png;base64,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",
    title: "SOFTWARE DEVELOPER",
    name: "Maximiliano David Lezano",
    url: "https://www.linkedin.com/in/maxlezano/",
  },
];

export { ourValues, profiles, carousel };
