import React from 'react';

const Footer = () => (
<tfoot>
        <tr>
        <td>
          Blend Stats
        </td>
        <td>
          { totalVolumeInLiters }
        </td>
        <td>
          { totalTanninInGrams / ( totalVolumeInLiters || 1 ) }
        </td>
        <td>
          { totalMalicAcidInGrams / ( totalVolumeInLiters || 1 ) }
        </td>
        <td>
          { productOfSpecificGravityGallons / ( totalVolumeInLiters || 1 ) }
        </td>
        </tr>
      </tfoot>
);
