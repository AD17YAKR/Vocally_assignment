const express = require('express');
const router = express.Router();
const Book = require('../models/Books');
const {
    getAllBooks,
    addNewBook,
    getBookById,
    updateBookById,
    deleteBookById
} = require('../controllers/books');

const advanceResults = require('../middlewares/advanceResults');

router
    .route('/')
    /**
     * @swagger
     * /books/:
     *  get:
     *      summary: API to get all books in the Library
     *      description: This API is get the details of all the books in the library containing their   name, Author, Pages and its genre
     *      responses:
     *              200:
     *                  description: All Data with Pagination enabled
     */
    .get(advanceResults(Book), getAllBooks)
    /**
     * @swagger
     * /books/:
     *  post:
     *      summary: API to add a Book in the Database
     *      requestBody:
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#components/schemas/Book'
     *      responses:
     *              201:
     *                  description: Added Successfully
     *              404:
     *                  description: Book Already Present
     *
     */
    .post(addNewBook);

router
    .route('/:id')
    /**
     * @swagger
     * /books/{id}:
     *  get:
     *      summary: API to get a book detail by id
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *      responses:
     *              200:
     *                  description: Specific Book Detail
     *
     */
    .get(getBookById)
    /**
     * @swagger
     * /books/{id}:
     *  put:
     *      summary: API to update a book detail by id
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *      requestBody:
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#components/schemas/Book'
     *      responses:
     *              200:
     *                  description: Specific Book Detail
     *
     */
    .put(updateBookById)
    /**
     * @swagger
     * /books/{id}:
     *  delete:
     *      summary: API to delete a book detail by id
     *      parameters:
     *          - in: path
     *            name: id
     *            required: true
     *      responses:
     *              200:
     *                  description: Delete Book Detail
     *
     */
    .delete(deleteBookById);

module.exports = router;
