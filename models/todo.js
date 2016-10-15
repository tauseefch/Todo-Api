module.exports = function(sequelize, DataType) {
	return sequelize.define('todo', {
		description: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				len: [1, 250]
			}
		},
		completed: {
			type: DataType.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	})
};