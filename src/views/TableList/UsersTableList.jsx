import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid, UsersData } from "components";

function UsersTableList({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Usuarios"
          cardSubtitle="Usuarios del sistema"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["Nombre", "Apellido", "Usuario", "Contraseña", "Tipo usuario"]}
              tableData={<UsersData/>}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default UsersTableList;
