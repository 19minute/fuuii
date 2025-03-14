import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  List, 
  ListItem, 
  ListItemText,
  CircularProgress,
  TextField,
  Box,
  Paper
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import { GridDimensions } from './types';

// Define component types we can load
export type ComponentType = 
  | 'metrics'
  | 'userList'
  | 'chart'
  | 'form'
  | 'activity'
  | 'status'
  | 'calendar'
  | 'tasks';

// Interface for component configuration
interface ComponentConfig {
  type: ComponentType;
  title: string;
  props?: Record<string, any>;
  getSizeClass?: (dimensions?: GridDimensions) => string;
}

// Create component loader class
class ComponentLoader {
  // Map configurations to specific tiles
  private tileConfigs: Record<string, ComponentConfig> = {
    'tile-0': { type: 'metrics', title: 'Key Metrics' },
    'tile-1': { type: 'chart', title: 'Monthly Performance' },
    'tile-2': { type: 'userList', title: 'Active Users' },
    'tile-3': { type: 'form', title: 'Quick Input' },
    'tile-4': { type: 'activity', title: 'Recent Activity' },
    'tile-5': { type: 'status', title: 'System Status' },
    'tile-6': { type: 'calendar', title: 'Upcoming Events' },
    'tile-7': { type: 'tasks', title: 'Todo List' }
  };

  // Load component directly without selection
  loadComponent(tileId: string, dimensions?: GridDimensions): React.ReactElement {
    const config = this.tileConfigs[tileId];
    
    if (!config) {
      return <EmptyTile tileId={tileId} />;
    }
    
    return <ComponentWrapper config={config} dimensions={dimensions} />;
  }
}

// Separate component for empty tiles
const EmptyTile = ({ tileId }: { tileId: string }) => {
  return (
    <Paper className="w-full h-full flex items-center justify-center">
      <Typography color="textSecondary">
        Empty Tile {tileId}
      </Typography>
    </Paper>
  );
};

// Update ComponentWrapper to use dimensions and strictly follow tile size
const ComponentWrapper = ({ 
  config, 
  dimensions 
}: { 
  config: ComponentConfig, 
  dimensions?: GridDimensions 
}) => {
  const { type, title, props = {} } = config;
  
  return (
    <Card 
      sx={{ 
        width: '100%', 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        '& .MuiCardContent-root': {
          padding: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Box sx={{ 
          flexGrow: 1, 
          overflow: 'auto',
          maxHeight: 'calc(100% - 40px)'
        }}>
          <ComponentContent 
            type={type} 
            props={props} 
            dimensions={dimensions} 
          />
        </Box>
      </CardContent>
    </Card>
  );
};

// ComponentContent remains the same
const ComponentContent = ({ 
  type, 
  props, 
  dimensions 
}: { 
  type: ComponentType, 
  props: Record<string, any>,
  dimensions?: GridDimensions
}) => {
  switch (type) {
    case 'metrics':
      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 2, flexGrow: 1 }}>
          <Paper elevation={1} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TrendingUpIcon color="primary" />
            <Typography variant="h5">85%</Typography>
            <Typography variant="caption">Conversion</Typography>
          </Paper>
          <Paper elevation={1} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PersonIcon color="secondary" />
            <Typography variant="h5">128</Typography>
            <Typography variant="caption">New Users</Typography>
          </Paper>
        </Box>
      );
    
    case 'chart':
      // Adjust chart based on dimensions
      const chartSize = dimensions && dimensions.w >= 3 ? 80 : 40;
      return (
        <Box sx={{ 
          height: '100%',
          width: '100%',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <BarChartIcon sx={{ fontSize: chartSize, opacity: 0.7 }} />
          <Typography>Chart Placeholder</Typography>
        </Box>
      );
    
    case 'userList':
      return (
        <List sx={{ 
          width: '100%',
          height: '100%',
          overflow: 'auto',
          padding: 0
        }}>
          {['John Doe', 'Jane Smith', 'Robert Johnson', 'Emily Davis'].map((name, i) => (
            <ListItem key={i} divider>
              <ListItemText 
                primary={name} 
                secondary={`Last active: ${Math.floor(Math.random() * 60)} minutes ago`} 
              />
            </ListItem>
          ))}
        </List>
      );
    
    case 'form':
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
          <TextField label="Name" variant="outlined" size="small" />
          <TextField label="Email" variant="outlined" size="small" />
          <Button variant="contained" color="primary">Submit</Button>
        </Box>
      );

    case 'activity':
      return (
        <List sx={{ flexGrow: 1, overflow: 'auto' }}>
          {[
            'File uploaded: report.pdf', 
            'User comment: Great work!', 
            'New user registered', 
            'Purchase completed'
          ].map((activity, i) => (
            <ListItem key={i} divider>
              <ListItemText 
                primary={activity} 
                secondary={`${Math.floor(Math.random() * 24)}h ago`} 
              />
            </ListItem>
          ))}
        </List>
      );
    
    case 'status':
      return (
        <Box sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 2 
        }}>
          <CircularProgress variant="determinate" value={92} size={60} />
          <Typography>Systems Online</Typography>
          <Typography variant="caption" color="textSecondary">
            Last checked: 2 minutes ago
          </Typography>
        </Box>
      );
    
    case 'calendar':
      return (
        <List sx={{ flexGrow: 1, overflow: 'auto' }}>
          {[
            'Team Meeting - Tomorrow, 10:00 AM', 
            'Project Deadline - Friday', 
            'Client Call - Next Monday', 
            'Conference - Next Month'
          ].map((event, i) => (
            <ListItem key={i} divider>
              <ListItemText primary={event} />
            </ListItem>
          ))}
        </List>
      );
    
    case 'tasks':
      return (
        <List sx={{ flexGrow: 1, overflow: 'auto' }}>
          {[
            'Review design mockups', 
            'Update documentation', 
            'Fix login bug', 
            'Prepare presentation'
          ].map((task, i) => (
            <ListItem key={i} divider>
              <ListItemText 
                primary={task} 
                secondary={`Priority: ${i === 0 ? 'High' : i === 1 ? 'Medium' : 'Low'}`} 
              />
            </ListItem>
          ))}
        </List>
      );
    
    default:
      return <Typography>Unknown component type</Typography>;
  }
};
// Export as singleton
export default new ComponentLoader();

