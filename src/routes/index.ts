import { Router } from 'express'
import { settingsController } from '../controllers'

const routes = Router()

routes.post('/settings', settingsController.create)

export { routes }