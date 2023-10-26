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

    router.route('/update/:id')
    // update a user
    .put(async (req, res)=> {
        const { id } = req.params;
        const { firstName, middleName, lastName, email, phoneNumber, address, adminNotes } = req.body;
      
        try {
          // find user by id
          const user = await User.findOne({
            where: { id },
          })
          if (!user) {
            return res.status(404).json({ 
              success: false,
              message: 'User not found in the database'
            })
          }

          const updateUser = await user.update({
            firstName,
            middleName,
            lastName,
            email,
            phoneNumber,
            address,
            adminNotes,
          })
          return res.json({
            success: true,
            data: updateUser,
            message: 'User updated successfully'
          })
        } catch (error) {
          console.error('Failed to update user', error);
        }
    })

    router.route('/delete/:id')
    // delete user
    .delete(async (req, res)=> {
      const { id } = req.params;
    
      try {
        //find user by id and delete
        const user = await User.destroy({
            where: { id },
        })
        // if user not found return error
        if (!user) {
          return res.status(404).json({ 
            success: false,
            message: 'User not found in the database'
          })
        }
        // success message
        return res.status(201).json({
          success: true,
          message: 'User deleted successfully',
        });
      } catch (error) {
        console.error('Failed to delete user', error);
      }
    })

    router.route('/find')
    // find user by name and email
    .get(async(req, res)=> {
      const { firstName, lastName, email } = req.body;
      return User.findOne({
        where: { firstName, lastName, email }
      })
      .then(user => {
        return res.json({
          success: true,
          data: user
        })
      })
      .catch(err => {
        console.error('Failed to find user', err);
        res.status(500).json({
          success: false, 
          message: 'Failed to find user'
        })
      })
    })
    return router;
  },
};

export default UsersRouter;
