# Hong Kong Chinese Restaurant - Backend

## Installation

```bash
npm install
```

## Environment Setup

Create a `.env` file with the following variables:

```
MONGODB_URI=mongodb://localhost:27017/hk-restaurant
PORT=5000
NODE_ENV=development
```

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Menu Items
- `GET /api/menu` - Get all menu items
- `GET /api/menu/category/:category` - Get items by category
- `GET /api/menu/special` - Get special items
- `POST /api/menu` - Create new menu item

### Reviews
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/rating` - Get average rating
- `POST /api/reviews` - Create new review

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:orderId` - Get order status

### Contact
- `POST /api/contact` - Send contact message
- `GET /api/contact/info` - Get restaurant info
