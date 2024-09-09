import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

// const navigationData = [
//   {
//     title: 'Home',
//     url: '/home',
//   },
//   {
//     title: 'Products',
//     children: [
//       {
//         title: 'Men',
//         url: '/products/men',
//       },
//       {
//         title: 'Women',
//         url: '/products/women',
//       },
//       {
//         title: 'Electronics',
//         children: [
//           {
//             title: 'Phones',
//             url: '/products/electronics/phones',
//           },
//           {
//             title: 'Laptops',
//             url: '/products/electronics/laptops',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: 'Services',
//     children: [
//       {
//         title: 'Same Day Delivery',
//         url: '/services/same-day-delivery',
//       },
//       {
//         title: 'Customized Services',
//         url: '/services/customized-services',
//       },
//     ],
//   },
//   {
//     title: 'About',
//     url: '/about',
//   },
//   {
//     title: 'Contact',
//     url: '/contact',
//   },
// ];





const navigationData = [
  {
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: 'Products',
    children: [
      {
        title: 'Clothing',
        children: [
          {
            title: 'Men',
            children: [
              {
                title: 'Shirts',
                url: '/products/clothing/men/shirts',
              },
              {
                title: 'Pants',
                url: '/products/clothing/men/pants',
              },
            ],
          },
          {
            title: 'Women',
            children: [
              {
                title: 'Dresses',
                url: '/products/clothing/women/dresses',
              },
              {
                title: 'Accessories',
                children: [
                  {
                    title: 'Jewelry',
                    url: '/products/clothing/women/accessories/jewelry',
                  },
                  {
                    title: 'Bags',
                    children: [
                      {
                        title: 'Handbags',
                        url: '/products/clothing/women/accessories/bags/handbags',
                      },
                      {
                        title: 'Backpacks',
                        url: '/products/clothing/women/accessories/bags/backpacks',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Electronics',
        children: [
          {
            title: 'Computers',
            children: [
              {
                title: 'Laptops',
                url: '/products/electronics/computers/laptops',
              },
              {
                title: 'Desktops',
                url: '/products/electronics/computers/desktops',
              },
            ],
          },
          {
            title: 'Mobile Phones',
            children: [
              {
                title: 'Smartphones',
                url: '/products/electronics/mobile-phones/smartphones',
              },
              {
                title: 'Feature Phones',
                url: '/products/electronics/mobile-phones/feature-phones',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Services',
    children: [
      {
        title: 'Consultation',
        children: [
          {
            title: 'Technical',
            children: [
              {
                title: 'Software Development',
                url: '/services/consultation/technical/software-development',
              },
              {
                title: 'System Architecture',
                url: '/services/consultation/technical/system-architecture',
              },
            ],
          },
          {
            title: 'Design',
            url: '/services/consultation/design',
          },
        ],
      },
      {
        title: 'Customer Support',
        children: [
          {
            title: 'Technical Issues',
            url: '/services/customer-support/technical-issues',
          },
          {
            title: 'Billing',
            url: '/services/customer-support/billing',
          },
        ],
      },
    ],
  },
  {
    title: 'About Us',
    children: [
      {
        title: 'Company Info',
        url: '/about/company-info',
      },
      {
        title: 'Team',
        children: [
          {
            title: 'Leadership',
            url: '/about/team/leadership',
          },
          {
            title: 'Departments',
            children: [
              {
                title: 'Engineering',
                url: '/about/team/departments/engineering',
              },
              {
                title: 'Sales',
                url: '/about/team/departments/sales',
              },
              {
                title: 'Support',
                children: [
                  {
                    title: 'Technical',
                    url: '/about/team/departments/support/technical',
                  },
                  {
                    title: 'Customer Service',
                    url: '/about/team/departments/support/customer-service',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation navigation={navigationData} />
      </div>
    </BrowserRouter>
  );
};
export default App;