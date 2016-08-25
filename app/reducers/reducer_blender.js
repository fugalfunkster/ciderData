const INITIAL_STATE = {
  totalVolumeInLiters: 0,
  totalMalicAcidInGrams: 0,
  totalTanninInGrams: 0,
  productOfSpecificGravityGallons: 0  
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case 'BLEND':
    return state;
  default:  
    return state;
  }
}
