import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Room from '../models/Room.js';
import connectDB from '../config/database.js';

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // Create admin user
    const adminExists = await User.findOne({ username: 'admin' });
    if (!adminExists) {
      await User.create({
        username: 'admin',
        password: 'admin123',
        role: 'admin'
      });
      console.log('✅ Admin user created');
    }

    // Create rooms
    const roomsData = [
      {
        roomId: 'salaar-studio',
        name: 'The Salaar Studio',
        image: 'https://known-scarlet-3cqffaookw.edgeone.app/salaar%20studio.jpeg',
        price: 4999,
        basePackage: 6,
        maxCapacity: 80,
        extraAdultCharge: 299,
        extraChildCharge: 199,
        description: 'Premium studio-style private theatre perfect for group celebrations and friends gatherings.',
        amenities: ['ac', 'projector', 'sound-system', 'lighting', 'seating']
      },
      {
        roomId: 'hitman-show',
        name: 'The Hitman Show',
        image: 'https://written-copper-gfevwqnna5.edgeone.app/hitman%20show.jpeg',
        price: 2999,
        basePackage: 4,
        maxCapacity: 50,
        extraAdultCharge: 199,
        extraChildCharge: 99,
        description: 'Best for small events and surprise celebrations.',
        amenities: ['ac', 'projector', 'sound-system', 'lighting']
      },
      {
        roomId: 'chhatrapathi-darbhar',
        name: 'The Chhatrapathi Shivaji Darbhar',
        image: 'https://elated-orange-0m2jps3egw.edgeone.app/shivaji%20darbar.jpeg',
        price: 14999,
        basePackage: 35,
        maxCapacity: 100,
        extraAdultCharge: 99,
        extraChildCharge: 99,
        description: 'Grand royal celebration hall ideal for big birthdays and large gatherings.',
        amenities: ['ac', 'projector', 'sound-system', 'lighting', 'seating', 'decoration']
      },
      {
        roomId: 'radhakrishna-bliss',
        name: 'Radhakrishna Bliss',
        image: 'https://personal-crimson-wconsktrqu.edgeone.app/radhakrishna%20bliss.jpeg',
        price: 1499,
        basePackage: 2,
        maxCapacity: 6,
        extraAdultCharge: 199,
        extraChildCharge: 99,
        description: 'Romantic couple-exclusive theatre designed for special moments.',
        amenities: ['ac', 'projector', 'sound-system', 'lighting', 'seating']
      }
    ];

    for (const roomData of roomsData) {
      const existingRoom = await Room.findOne({ roomId: roomData.roomId });
      if (!existingRoom) {
        await Room.create(roomData);
        console.log(`✅ Room ${roomData.name} created`);
      } else {
        // Update image (and any other fields) if the data changed
        let updated = false;
        const updatableFields = [
          'name',
          'image',
          'price',
          'basePackage',
          'maxCapacity',
          'extraAdultCharge',
          'extraChildCharge',
          'description',
          'amenities'
        ];

        for (const field of updatableFields) {
          if (roomData[field] !== undefined && existingRoom[field] !== roomData[field]) {
            existingRoom[field] = roomData[field];
            updated = true;
          }
        }

        if (updated) {
          await existingRoom.save();
          console.log(`🔄 Room ${roomData.name} updated`);
        }
      }
    }

    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedData();