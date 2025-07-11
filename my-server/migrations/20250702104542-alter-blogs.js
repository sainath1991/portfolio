'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'Blogs',
        'id',
        {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          before: 'title'
        }
      );
      await queryInterface.addColumn(
        'Blogs',
        'createdAt',
        {
          allowNull: false,
          type: Sequelize.DATE
        }
      );
      await queryInterface.addColumn(
        'Blogs',
        'updatedAt',
        {
          allowNull: false,
          type: Sequelize.DATE
        }
      );
      await queryInterface.addColumn(
        'Blogs',
        'image',
        {
          type: Sequelize.STRING,
          after: 'title'
        }
      );
      await transaction.commit();
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn(
        'Blogs',
        'id',
        {
          transaction
        }
      );
      await queryInterface.removeColumn(
        'Blogs',
        'createdAt',
        {
          transaction
        }
      );
      await queryInterface.removeColumn(
        'Blogs',
        'updateddAt',
        {
          transaction
        }
      );
      await transaction.commit();
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
};
