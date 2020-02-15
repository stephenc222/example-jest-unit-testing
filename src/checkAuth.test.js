jest.mock('./authUser')

describe('checkAuth', () => {
  beforeEach(() => jest.clearAllMocks())
  it('calls authUser', async () => {
    const authUser = jest.requireMock('./authUser').default
    const checkAuth = require('./checkAuth').default
    await checkAuth()
    await expect(authUser).toHaveBeenCalled()
  })
  it('returns with an expected object', async () => {
    const authUser = jest.requireMock('./authUser').default
    authUser.mockReturnValue({ bob: true })
    const checkAuth = require('./checkAuth').default
    const testResult = await checkAuth()
    expect(testResult).toEqual(expect.objectContaining({ bob: true }))
  })
  it('returns with a different expected object', async () => {
    const authUser = jest.requireMock('./authUser').default
    authUser.mockReturnValue({ jack: 10 })
    const checkAuth = require('./checkAuth').default
    const testResult = await checkAuth()
    expect(testResult).toEqual(expect.objectContaining({ jack: 10 }))
  })
  it('returns with null if "authUser" throws', async () => {
    const authUser = jest.requireMock('./authUser').default
    authUser.mockImplementation(() => { throw new Error('authUser failed') })
    const checkAuth = require('./checkAuth').default
    const testResult = await checkAuth()
    expect(testResult).toEqual(null)
  })
})