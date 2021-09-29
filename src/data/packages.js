import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';


const packages = {
    monthly: [
      {
        id: 1,
        name: 'Basic',
        description: 'For Small Teams or Office',
        buttonText: 'Start free trail',
        priceWithUnit: '$999',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Landing Page & Portfolio',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Solutions",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Deployment',
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
        priceWithUnit: 'Start from $2999',
        buttonText: 'Create account',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Landing Page & Portfolio',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Solutions",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Deployment',
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
        priceWithUnit: 'Start from $3999',
        buttonText: 'Create account',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Landing Page & Portfolio',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Website Solutions",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Website Deployment',
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
        priceWithUnit: '$499 /time',
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
            icon: <IoIosCloseCircle />,
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
        priceWithUnit: '$999 /month',
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
            text: 'Maximum 20 hours',
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
        priceWithUnit: '$1999 /month',
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
            text: 'Maximum 50 hours',
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