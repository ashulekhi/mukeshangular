/**
 * Created by ashu_dev on 06/04/17.
 */

angular.module('mukeshapp')



    .service('printService' , function(){
        return{

            name : '',
            print:function(){
                console.log('this is printing');
            }



        }
    });