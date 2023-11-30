import { Request, Response, NextFunction } from 'express';
import { ValidationChain, body, validationResult } from 'express-validator';

const validate = {
    projectRules: (): ValidationChain[] => {
        return [
            body('projectName')
                .trim()
                .isString()
                .isLength({ min: 3 })
                .withMessage('Project name must be a string.'),

            body('company')
                .trim()
                .isString()
                .isLength({ min: 3 })
                .withMessage('Company name must be a string.'),
            
            body('projectDescription')
                .trim()
                .isString()
                .isLength({ min: 3 })
                .withMessage('Project description must be a string.'),
                
            body('technologies')
                .isArray({ min: 1 })
                .withMessage('Please provide at least one technology needed for the project.')
                .custom((value: string[]) => {
                    // Check if every element in the array is a string
                    if (!value.every((element) => typeof element === 'string')) {
                        throw new Error('Technologies must be an array of strings.');
                    }
                    return true;
                }),
    ]},
    
    checkProjectData: (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        next();
    },

    contactRules: (): ValidationChain[] => {
        return [
            body('name')
                .trim()
                .isString()
                .isLength({ min: 3 })
                .withMessage('Name must be a string.'),

            body('title')
                .trim()
                .isString()
                .isLength({ min: 3 })
                .withMessage('Title must be a string.'),

            body('email')
                .trim()
                .isEmail()
                .withMessage('Email must be a valid email address.'),

            body('phone')
                .trim()
                .isMobilePhone('any', { strictMode: true })
                .withMessage('Phone must be a valid phone number.'),

            body('department')
                .trim()
                .isString()
                .isLength({ min: 3 })
                .withMessage('Department must be a string.'),

            body('projects')
                .isArray({ min: 1 })
                .withMessage('Please provide at least one project.')
                .custom((value: string[]) => {
                    // Check if every element in the array is a string
                    if (!value.every((element) => typeof element === 'string')) {
                        throw new Error('Projects must be an array of strings.');
                    }
                    return true;
                }),
    ]},

    checkContactData: (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        next();
    },

    
}

export default validate;
