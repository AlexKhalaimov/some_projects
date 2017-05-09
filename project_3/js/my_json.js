$(function () {
    var _url = "https://rawgit.com/goit-fe/markup_fe2o/master/js_19-20/data.json";

    $.getJSON(_url, function(json){
        var myJSON = json;
        var myFriends,
            skills,
            users;


        function getUsers(obj){
            users = _.map(_.sortBy(obj, [function(o){
                return o.friends.length;
            }]), 'name');
        }


        function getFriends(obj){
            myFriends = _.uniq(_.map(_.flattenDeep(_.map(obj, 'friends')), 'name'));

        }

        function sortCase(a, b) {
            if (a.toLowerCase() > b.toLowerCase())
            return 1;
            if (a.toLowerCase() < b.toLowerCase())
            return -1;
            else
            return 0;
        }

        skills = (_.uniq(_.flattenDeep((_.map(json, "skills"))))).sort(sortCase);


        getFriends(myJSON);
        getUsers(myJSON);

        console.log('sorted skills',skills);
        console.log('list of uniq friends',myFriends);
        console.log('list of users',users);


      });
});
