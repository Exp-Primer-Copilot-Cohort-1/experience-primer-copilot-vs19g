function skillsMember() {
    this.name = 'skills';
    this.collectionOptions = {
        noDefaults: false
    };
    this.schema = {
        name: {
            type: String,
            required: true,
            index: true
        },
        level: {
            type: Number,
            required: true,
            default: 1
        },
        desc: {
            type: String,
            required: false
        }
    };
    this.indexes = [
        {level: 1}
    ];
    this.methods = {
        // addSkill: function (skill) {
        //     this.skills.push(skill);
        //     return this.save();
        // },
        // removeSkill: function (skill) {
        //     this.skills.pull(skill);
        //     return this.save();
        // },
        // updateSkill: function (skill) {
        //     // TODO
        //     return this.save();
        // }
    };
    this.statics = {};
    this.virtuals = {};
    this.hooks = {};
}) {
    this.name = 'skills';
    this.collectionOptions = {
        noDefaults: false
    };
    this.schema = {
        name: {
            type: String,
            required: true,
            index: true
        },
        level: {
            type: Number,
            required: true,
            default: 1
        },
        desc: {
            type: String,
            required: false
        }
    };
    this.indexes = [
        {level: 1}
    ];
    this.methods = {
        // addSkill: function (skill) {
        //     this.skills.push(skill);
        //     return this.save();
        // },
        // removeSkill: function (skill) {
        //     this.skills.pull(skill);
        //     return this.save();
        // },
        // updateSkill: function (skill) {
        //     // TODO
        //     return this.save();
        // }
    };
    this.statics = {};
    this.virtuals = {};
    this.hooks = {};
}