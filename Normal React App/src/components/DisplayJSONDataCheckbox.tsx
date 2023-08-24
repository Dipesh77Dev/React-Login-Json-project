import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Checkbox,
  Button,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';


interface Subdepartment {
  id: string;
  name: string;
}

interface Department {
  department: string;
  sub_departments: Subdepartment[];
}

const data: Department[] = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'].map((name) => ({ id: name, name })),
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'].map(
      (name) => ({ id: name, name })
    ),
  },
];

const DisplayJSONDataCheckbox: React.FC = () => {
  // const [expanded, setExpanded] = useState< boolean >({});
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const handleExpand = (department: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [department]: !prevExpanded[department],
    }));
  };

  const handleToggleAllSubDepartments = (department: string) => {
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected };

      if (newSelected[department]) {
        data.find((dep) => dep.department === department)?.sub_departments.forEach(
          (subdep) => {
            newSelected[subdep.id] = false;
          }
        );
        newSelected[department] = false;
      } else {
        data.find((dep) => dep.department === department)?.sub_departments.forEach(
          (subdep) => {
            newSelected[subdep.id] = true;
          }
        );
        newSelected[department] = true;
      }

      return newSelected;
    });
  };

  const handleToggleSubDepartment = (subdepartmentId: string) => {
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected };
      newSelected[subdepartmentId] = !newSelected[subdepartmentId];

      const department = data.find((dep) =>
        dep.sub_departments.some((subdep) => subdep.id === subdepartmentId)
      );

      if (
        department?.sub_departments.every(
          (subdep) => newSelected[subdep.id] || newSelected[subdep.id] === false
        )
      ) {
        newSelected[department.department] =
          department.sub_departments.every(
            (subdep) => newSelected[subdep.id]
          )
            ? true
            : false;
      } else {
        newSelected[department?.department || ''] = false;
      }

      return newSelected;
    });
  };

  return (
    <List>
      {data.map((dep) => (
        <div key={dep.department}>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                checked={selected[dep.department] || false}
                onChange={() => handleToggleAllSubDepartments(dep.department)}
              />
            </ListItemIcon>
            <ListItemText primary={dep.department} />
            <Button onClick={() => handleExpand(dep.department)}>
              {expanded[dep.department] ? <ExpandLess /> : <ExpandMore />}
            </Button>
          </ListItem>
          <Collapse in={expanded[dep.department] || false} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dep.sub_departments.map((subdep) => (
                <ListItem key={subdep.id} sx={{ pl: 5 }}>
                  <Checkbox
                    checked={selected[subdep.id] || false}
                    onChange={() => handleToggleSubDepartment(subdep.id)}
                  />
                  <ListItemText primary={subdep.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DisplayJSONDataCheckbox;
