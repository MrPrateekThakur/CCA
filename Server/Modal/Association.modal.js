import Organizer from "./Organizer.modal.js";
import Tournament from "./Tournament.modal.js";
import Player from './Player.modal.js'
import Team from "./Team.modal.js";
import TournamentTeam from "./TournamentTeam.modal.js";
import Request from "./Request.modal.js";
import SelectedPlayer from "./SelectedPlayer.model.js";
import Category from "./Category.modal.js";
import SubCategory from "./SubCategory.modal.js";
import TeamDetail from "./TeamDetail.modal.js";

// ~~~~~~~~~~~~~~Tournament Model~~~~~~~~~~~~~~~~~~~~~~
// Organizer.hasMany(Tournament, { onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'organizer_id' }); // One to Many
// Tournament.belongsTo(Organizer, { foreignKey: 'organizer_id', targetKey: 'organizer_id' });

// ~~~~~~~~~~~~~~TournamentTeam Model~~~~~~~~~~~~~~~~~~~~~~
// TournamentTeam.belongsTo(Tournament, { onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'tournament_id' }); // Many Teams belong to one Tournament
// Team.hasMany(TournamentTeam, { foreignKey: 'team_id' });
// Define associations between Tournament and TournamentTeam
Tournament.hasMany(TournamentTeam, { foreignKey: 'tournament_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
TournamentTeam.belongsTo(Tournament, { foreignKey: 'tournament_id' });

// Define associations between Team and TournamentTeam
Team.hasMany(TournamentTeam, { foreignKey: 'team_id' });
TournamentTeam.belongsTo(Team, { foreignKey: 'team_id' });

// ~~~~~~~~~~~~~~Request Model~~~~~~~~~~~~~~~~~~~~~~
Player.belongsToMany(Team, { through: Request, onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'player_id', otherKey: 'team_id' });
Team.belongsToMany(Player, { through: Request, foreignKey: 'team_id', otherKey: 'player_id' });

// ~~~~~~~~~~~~~~SelectedPlayer Model~~~~~~~~~~~~~~~~~~~~~~
SelectedPlayer.belongsTo(Player, { onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'player_id' }); // Many Teams belong to one Tournament
Team.hasMany(SelectedPlayer, { foreignKey: 'team_id' });

// ~~~~~~~~~~~~~~SubCategory Model~~~~~~~~~~~~~~~~~~~~~~
Category.hasMany(SubCategory, { onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'category_id' });
SubCategory.belongsTo(Category, { foreignKey: 'category_id', targetKey: 'category_id' });

// ~~~~~~~~~~~~~~Player Model~~~~~~~~~~~~~~~~~~~~~~
SubCategory.hasMany(Player, { onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'subCategory_id' });
Player.belongsTo(SubCategory, { foreignKey: 'subCategory_id' })

// ~~~~~~~~~~~~~~Team Details Model~~~~~~~~~~~~~~~~~~~~~~
// Team.hasMany(Player, { through: TeamDetail, onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'team_id', otherKey: 'player_id'});
// Player.belongsTo(Team, { through: TeamDetail, foreignKey: 'player_id', otherKey: 'team_id' });
// Team.belongsToMany(Player, { through: TeamDetail, onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'team_id' });
// Player.belongsToMany(Team, { through: TeamDetail, onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: 'player_id' });
TeamDetail.belongsTo(Team, { foreignKey: 'team_id' }); // Association with Team
TeamDetail.belongsTo(Player, { foreignKey: 'player_id' });

export { Team, Tournament, TournamentTeam, Player, Organizer }