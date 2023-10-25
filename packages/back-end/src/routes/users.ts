import { Router } from 'express';
import IRoute from '../types/IRoute';
import { User } from '../services/db';

const UsersRouter: IRoute = {
  route: '/users',
  router() {
    const router = Router();

    router.route('/')
      // Fetch all users
      .get(async (req, res) => {
        // pro tip: if you're not seeing any users, make sure you seeded the database.
        //          make sure you read the readme! :)

        return User.findAll()
          .then(users => {
            return res.json({
              success: true,
              data: users,
            });
          })
          .catch(err => {
            console.error('Failed to list all users.', err);
            res.status(500).json({
              success: false,
            });
          });

      })
    ;

    router.route('/create')
    // create a new user
    .post(async (req, res)=> {
      try {
        const newUser = await User.create(req.body);

        return res.status(201).json({
          success: true,
          message: 'User created successfully',
          data: newUser
        });
      } catch (error) {
        // check for duplicates
        if (error.name === 'SequelizeUniqueConstraintError') {
          return res.status(400).json({
            success: false,
            message: 'Error: User is already in the database',
          });
        }
        console.error('Failed to create a user:', error);
        return res.status(500).json({
          success: false,
          message: 'Failed to create a user',
        });
      } 
    })
    return router;
  },
};

export default UsersRouter;
