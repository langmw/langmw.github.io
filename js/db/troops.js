const troops = [
    // I Level
    {
        name: "Soldier",
        stats: [28, 26, 15, 12],
        skill: "Nope"
    },
    {
        name: "Pike",
        stats: [31, 24, 17, 10],
        skill: "Nope"
    },
    {
        name: "Knight",
        stats: [26, 28, 14, 11],
        skill: "Nope"
    },
    {
        name: "Thief",
        stats: [26, 28, 13, 13],
        skill: "Nope"
    },
    {
        name: "Archer",
        stats: [22, 26, 12, 15],
        skill: "Nope"
    },
    {
        name: "Priest",
        stats: [23, 20, 13, 18],
        skill: "Nope"
    },
    {
        name: "Merman",
        stats: [28, 26, 15, 12],
        skill: "Nope"
    },
    {
        name: "Griffin",
        stats: [26, 29, 13, 15],
        skill: "Nope"
    },
    {
        name: "Hussar",
        stats: [23, 24, 13, 13],
        skill: "Nope"
    },
    // II Level
    {
        name: "Fighter",
        stats: [31, 34, 17, 14],
        skill: "主动攻击时，暴击率提升10%"
    },
    {
        name: "Elite Soldier",
        stats: [34, 31, 18, 14],
        skill: "主动攻击时，暴击率提升10%"
    },
    {
        name: "Orc",
        stats: [34, 31, 17, 13],
        skill: "主动进入战斗时，攻击提升10%。"
    },
    {
        name: "Maid",
        stats: [28, 31, 18, 18],
        skill: "士兵生命高于80%时，攻击提升10%。"
    },
    {
        name: "Elite Pike",
        stats: [37, 29, 20, 12],
        skill: "被攻击进入战斗时，造成伤害提升10%。"
    },
    {
        name: "姬武者",
        stats: [31, 34, 17, 16],
        skill: "主动进入战斗时，攻击提升10%。"
    },
    {
        name: "Golem",
        stats: [37, 26, 22, 12],
        skill: "士兵生命低于70%时，防御提升10%。"
    },
    {
        name: "骨兽",
        stats: [28, 35, 16, 14],
        skill: "自身生命100%时，攻击提升10%。"
    },
    {
        name: "Elite Knight",
        stats: [31, 34, 17, 13],
        skill: "主动进入战斗时，遭受伤害降低10%。"
    },
    {
        name: "Holy Knight",
        stats: [31, 31, 17, 20],
        skill: "和[魔物]战斗时，攻击和防御提升20%。"
    },
    {
        name: "Elite Griffin",
        stats: [31, 35, 16, 18],
        skill: "生命大于80%时，所遭受的伤害降低10%。"
    },
    {
        name: "Little Devil",
        stats: [34, 35, 17, 17],
        skill: "攻击100%生命值的部队时，进入战斗后攻击提升10%。"
    },
    {
        name: "Pegasus",
        stats: [31, 34, 18, 18],
        skill: "被远程攻击进入战斗时，所遭受的伤害降低20%。"
    },
    {
        name: "Elite Thief",
        stats: [31, 31, 16, 16],
        skill: "暴击率提升20%"
    },
    {
        name: "女忍",
        stats: [31, 29, 17, 20],
        skill: "暴击率提升20%，暴击触发后对敌军施加随机1个弱化效果。"
    },
    {
        name: "Elf",
        stats: [26, 31, 14, 18],
        skill: "在[树林]和[山地]时，攻击力提升10%。"
    },
    {
        name: "Ballista",
        stats: [24, 29, 13, 16],
        skill: "部队普通攻击射程提升1 主动进入战斗时，部队伤害降低40%"
    },
    {
        name: "Dark Elf",
        stats: [24, 31, 13, 20],
        skill: "攻击100%生命值的部队时，进入战斗后攻击提升10%。"
    },
    {
        name: "Skeleton Archer",
        stats: [26, 31, 16, 24],
        skill: "亡者苏生：士兵生命为0%时，主动攻击战后回复15%生命。"
    },
    {
        name: "Skeleton Soldier",
        stats: [34, 31, 17, 14],
        skill: "亡者苏生： 士兵生命为0%时，主动进入战斗时，战后回复15%的生命"
    },
    {
        name: "Crusader",
        stats: [26, 24, 14, 22],
        skill: "普通攻击造成魔法伤害，英雄施加治疗的效果提升5%。"
    },
    {
        name: "Monk",
        stats: [31, 29, 17, 16],
        skill: "和[魔物]战斗时，攻击额外提升20%。"
    },
    {
        name: "Witch",
        stats: [26, 31, 13, 22],
        skill: "普通攻击造成魔法伤害，士兵生命100%时，攻击提升10%"
    },
    {
        name: "Elite Merman",
        stats: [34, 31, 18, 14],
        skill: "在水中战斗时，攻击提升10%"
    },
    {
        name: "Lobster",
        stats: [34, 29, 20, 12],
        skill: "攻击100%生命值的部队时，进入战斗后攻击提升10%"
    },
    // III Level
    {
        name: "Dark Guard",
        stats: [53, 37, 23, 19],
        skill: "主动进入战斗时，战后造成对方部队生命上限5%伤害，本部队生命值恢复10%。"
    },
    {
        name: "Heavy Soldier",
        stats: [43, 40, 23, 19],
        skill: "主动进入战斗时，士兵攻击提升10%。被攻击进入战斗时，士兵防御提升10%。"
    },
    {
        name: "Guard Soldier",
        stats: [53, 37, 23, 19],
        skill: "士兵生命高于80%时，防御提升15%。"
    },
    {
        name: "Highland Warriors",
        stats: [43, 40, 22, 20],
        skill: "攻击提升5%，遭受所有伤害降低5%。"
    },
    {
        name: "Mad Orc",
        stats: [43, 40, 22, 17],
        skill: "士兵生命高于80%时攻击提升15%。"
    },
    {
        name: "Cannibal Troll",
        stats: [48, 43, 20, 19],
        skill: "攻击生命值低于本部队的敌军时，进入战斗后攻击与防御各提升10%。"
    },
    {
        name: "Berserker",
        stats: [40, 43, 22, 19],
        skill: "暴击率提升10%，攻击提升5%。"
    },
    {
        name: "Masked Maid",
        stats: [36, 40, 23, 23],
        skill: "士兵生命>80%时，进入战斗前损失10%生命，使得攻击、防御提升15%"
    },
    {
        name: "Heavy Pike",
        stats: [48, 37, 26, 16],
        skill: "遭受物理伤害降低10%"
    },
    {
        name: "Rock Golem",
        stats: [48, 34, 28, 16],
        skill: "士兵生命低于70%时，遭受所有伤害降低10%。"
    },
    {
        name: "重戟百夫长",
        stats: [48, 37, 23, 17],
        skill: "被攻击进入战斗时，攻击和防御提升10%"
    },
    {
        name: "Lava Golem",
        stats: [53, 34, 26, 19],
        skill: "行动结束时，对2格内1个敌军施加[灼烧]:行动结束损失10%的生命。"
    },
    {
        name: "Guard Pike",
        stats: [43, 40, 23, 17],
        skill: "士兵生命低于70%时，攻击提升15%。"
    },
    {
        name: "暗影百夫长",
        stats: [48, 40, 26, 16],
        skill: "士兵生命高于10%时，被攻击进入战斗时，战后30%概率触发英雄的[倒刺]伤害。"
    },
    {
        name: "姬武神",
        stats: [40, 43, 22, 20],
        skill: "主动进入战斗时，攻击提升10%，30%概率使敌军攻防降低20%，持续1回合。"
    },
    {
        name: "Heavy Knight",
        stats: [40, 43, 22, 17],
        skill: "攻击提升7%"
    },
    {
        name: "Dragon Knight",
        stats: [43, 43, 22, 19],
        skill: "主动进入战斗时，攻击与防御提升10%"
    },
    {
        name: "骨犀",
        stats: [36, 45, 20, 19],
        skill: "士兵生命高于80%时，攻击提升15%"
    },
    {
        name: "Cerberus",
        stats: [40, 45, 20, 19],
        skill: "主动进入战斗时，战后使得周围2格的所有敌军遭受伤害提升10%。"
    },
    {
        name: "Guard Knight",
        stats: [43, 40, 23, 17],
        skill: "主动进入战斗时，遭受的所有伤害降低15%"
    },
    {
        name: "Royal Knight",
        stats: [43, 43, 23, 17],
        skill: "士兵生命高于80%时，遭受物理伤害降低15%"
    },
    {
        name: "Knights Templar",
        stats: [40, 40, 22, 26],
        skill: "和[魔物]战斗时攻防提升15%，整个部队魔防提升15%"
    },
    {
        name: "Royal Griffin",
        stats: [40, 45, 20, 23],
        skill: "生命大于80%时，攻击与防御提升10%"
    },
    {
        name: "Gargoyle",
        stats: [43, 45, 22, 22],
        skill: "士兵生命大于50%，攻击提升10% 士兵生命小于50%，防御提升10%"
    },
    {
        name: "Holy Pegasus",
        stats: [40, 43, 23, 23],
        skill: "士兵生命大于50%时，主动攻击进入战斗前，30%的概率遭受伤害降低50%"
    },
    {
        name: "Bat",
        stats: [43, 45, 22, 22],
        skill: "主动进入战斗时，战后士兵可以恢复造成伤害的15%的生命"
    },
    {
        name: "Angel",
        stats: [43, 43, 22, 26],
        skill: "遭受魔法伤害降低15%，生命大于50%时，攻防提升7%。"
    },
    {
        name: "Assassin",
        stats: [40, 40, 20, 20],
        skill: "暴击率提升10%，攻击提升5%"
    },
    {
        name: "Ninja",
        stats: [36, 43, 20, 20],
        skill: "暴击率提升10%，士兵暴击后对敌军造成部队生命上限7%的伤害"
    },
    {
        name: "Mist Girl",
        stats: [40, 37, 22, 26],
        skill: "暴击提升15%，暴击后对敌军施加1个强力弱化效果。"
    },
    {
        name: "Warrior",
        stats: [40, 40, 22, 22],
        skill: "部队攻击不受近战伤害减免，近战攻击时，攻击提升7%，远程攻击时，暴击率提升7%"
    },
    {
        name: "Big Elf",
        stats: [34, 40, 19, 23],
        skill: "在[树林]和[山地]时，攻防提升10%"
    },
    {
        name: "天空射手",
        stats: [36, 40, 17, 23],
        skill: "使本部队的移动不受地形影响 主动进入战斗时，部队攻击提升10%"
    },
    {
        name: "Big Dark Elf",
        stats: [31, 40, 17, 26],
        skill: "攻击100%生命值的部队时，进入战斗后攻击和防御提升15%"
    },
    {
        name: "Sniper",
        stats: [34, 40, 19, 23],
        skill: "主动进入战斗时，攻击提升10%，战后额外造成对方生命上限5%的伤害"
    },
    {
        name: "Catapult",
        stats: [31, 37, 17, 20],
        skill: "部队普通攻击射程提升1 主动进入战斗时，部队伤害降低30%，7%概率造成强力弱化效果"
    },
    {
        name: "Assault Hussar",
        stats: [36, 37, 20, 20],
        skill: "主动进入战斗前，30%的概率使敌军移动力降低2，防御降低20%，持续1回合。"
    },
    {
        name: "旋风游骑兵",
        stats: [40, 37, 22, 19],
        skill: "生命大于50%时，被攻击时进入战斗前有30%的概率触发，遭受伤害降低50%"
    },
    {
        name: "重装骷髅",
        stats: [43, 40, 22, 19],
        skill: "亡者苏生：士兵生命为0%时，主动进入战斗时，战后恢复15%的生命；被攻击进入战斗时，防御提升10%"
    },
    {
        name: "Death Knight",
        stats: [40, 40, 22, 20],
        skill: "亡者苏生：士兵生命为0%时，主动进入战斗时，战后恢复15%的生命；攻击僧侣和魔物以外的部队时，攻击提升10%"
    },
    {
        name: "Flame Skeleton",
        stats: [34, 40, 20, 19],
        skill: "亡者苏生：士兵生命为0%时，主动进入战斗时，战后恢复15%的生命；战斗后，额外造成对方部队生命上限5%的伤害"
    },
    {
        name: "God Monk",
        stats: [34, 31, 20, 28],
        skill: "普通攻击造成魔法伤害，英雄施加的治疗效果提升5%，士兵生命>80%，防御提升10%"
    },
    {
        name: "God Knight",
        stats: [36, 34, 22, 26],
        skill: "普通攻击造成魔法伤害，英雄施加的治疗效果提升5%。 士兵生命>80时，防御提升10%。"
    },
    {
        name: "Exorcist",
        stats: [40, 37, 22, 23],
        skill: "和魔物战斗时，攻击提升10%；和非魔物战斗时，防御提升10%。"
    },
    {
        name: "Elite Witch",
        stats: [34, 40, 17, 28],
        skill: "普通攻击造成魔法伤害，士兵生命100%时，魔防提升15%"
    },
    {
        name: "人鱼统领",
        stats: [43, 40, 23, 19],
        skill: "在水中时，攻击与防御提升10%"
    },
    {
        name: "Big Lobster",
        stats: [43, 37, 26, 17],
        skill: "在水中时，遭受所有伤害降低15%"
    },
    {
        name: "Sea Monster",
        stats: [43, 40, 23, 19],
        skill: "在水中时，攻击50%生命值以上的部队时，进入战斗后攻击提升15%"
    },
    {
        name: "Lizard",
        stats: [40, 43, 23, 19],
        skill: "在水中时，攻击提升15%"
    }
]