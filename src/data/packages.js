import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';


const packages = {
    monthly: [
      {
        id: 1,
        name: 'Basic',
        description: 'For Small Teams or Office',
        buttonText: 'Start free trail',
        priceWithUnit: 'Limited Special $499',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Design Template',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Single Page Website",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Hosting & Domain',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCloseCircle />,
            text: 'eCommerce Store ',
            isAvailable: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Standard',
        description: 'For Enterprise Business',
        priceWithUnit: 'Start from $1499',
        buttonText: 'Create account',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Custom Design',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Up to 5 pages",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Hosting & Domain',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: 'Serverless eCommerce Store',
            isAvailable: true,
          },
        ],
      },
      {
        id: 3,
        header: 'Suggested',
        headerIcon: <IoIosCheckmarkCircle />,
        name: 'Premium',
        description: 'For Pro Business Customer',
        priceWithUnit: 'Start from $1999',
        buttonText: 'Create account',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Custom Design',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Unlimited Pages",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Hosting & Domain',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: 'Full Stack eCommerce Store',
            isAvailable: true,
          },
        ],
      },
    ],
    annual: [
      {
        id: 1,
        name: 'Basic Service',
        description: 'For Small Teams or Office',
        buttonText: 'Start free trail',
        priceWithUnit: '$350 /month',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Consultation",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Solutions',
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Maintenance',
            isAvailable: false,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: 'Maximum 5 hours',
            isAvailable: true,
          },
          {
            id: 5,
            icon: <IoIosCheckmarkCircle />,
            text: '5d x 8h Response',
            isAvailable: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Standard Service',
        description: 'For Enterprise Business',
        priceWithUnit: '$650 /month',
        buttonText: 'Create account',
        // anotherOption: 'Or Start 10 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Consultation",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Solutions',
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Maintenance',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: 'Maximum 10 hours',
            isAvailable: true,
          },
          {
            id: 5,
            icon: <IoIosCheckmarkCircle />,
            text: '7d x 12h Response',
            isAvailable: true,
          },
        ],
      },
      {
        id: 3,
        header: 'Suggested',
        headerIcon: <IoIosCheckmarkCircle />,
        name: 'Premium Service',
        description: 'For Pro Business Customer',
        priceWithUnit: '$950 /month',
        buttonText: 'Create account',
        // anotherOption: 'Or Start 10 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Consultation",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Solutions',
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Maintenance',
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: 'Maximum 15 hours',
            isAvailable: true,
          },
          {
            id: 5,
            icon: <IoIosCheckmarkCircle />,
            text: '7d x 24h Response',
            isAvailable: true,
          },
        ],
      },
    ],
  };


export default packages 