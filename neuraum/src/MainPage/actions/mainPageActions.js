const actionTypes = {
  fetchHouses: "FETCH_HOUSES",
  fetchHousesSuccess: "FETCH_HOUSES_SUCCESS",
  fetchHousesFailure: "FETCH_HOUSES_FAILURE",
}

const actions = {
  fetchHouses: () => {
    console.log("action fired")
    return ({
      type: actionTypes.fetchHouses,
    })

  },
  fetchHousesSuccess: () => ({
    type: actionTypes.fetchHousesSuccess,
  }),
  fetchHousesFailure: () => ({
    type: actionTypes.fetchHousesFailure,
  })
}

export {
  actions,
  actionTypes,
}
