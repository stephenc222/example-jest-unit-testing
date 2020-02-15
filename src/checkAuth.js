import authUser from './authUser'

async function checkAuth() {
  try {
    // this is mocked, setting the mock allows "authUser" return value to be set
    const instAuthUser = await authUser({ option: 1 })
    return instAuthUser
  } catch (err) {
    console.error(err)
    return null
  }
}

export default checkAuth