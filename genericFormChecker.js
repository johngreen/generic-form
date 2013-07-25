/*
Non-Commercial Software License Agreement

This license agreement ("License"), effective today, is made by and between you (hereinafter referred to as the "Licensee") and John C Green,  for research purposes and includes executable code, source code, and documentation (hereinafter referred to as the "Software").

    General. A non-exclusive, nontransferable, perpetual license is granted to the Licensee to install and use the Software for academic, non-profit, or government-sponsored research purposes. Use of the Software under this License is restricted to non-commercial purposes. Commercial use of the Software requires a separately executed written license agreement.

    Permitted Use and Restrictions. Licensee agrees that it will use the Software, and any modifications, improvements, or derivatives to the Software that the Licensee may create (collectively, "Improvements") solely for internal, non-commercial purposes and shall not distribute or transfer the Software or Improvements to any person or third parties without prior written permission from John C Green. The term "non-commercial," as used in this License, means academic or other scholarly research which (a) is not undertaken for profit, or (b) is not intended to produce works, services, or data for commercial use, or (c) is neither conducted, nor funded, by a person or an entity engaged in the commercial use, application or exploitation of works similar to the Software.

    Ownership and Assignment of Copyright. The Licensee acknowledges that John C Grren hold copyright in the Software and associated documentation, and the Software and associated documentation are the property of John C Green. The Licensee agrees that any Improvements made by Licensee shall be subject to the same terms and conditions as the Software. Licensee agrees not to assert a claim of infringement in Licensee copyrights in Improvements in the event John C Green prepares substantially similar modifications or derivative works. The Licensee agrees to use his/her reasonable best efforts to protect the contents of the Software and to prevent unauthorized disclosure by its agents, officers, employees, and consultants. If the Licensee receives a request to furnish all or any portion of the Software to a third party, Licensee will not fulfill such a request but will refer the third party to millenniumtoday@gmail.com so that the third party's use of this Software will be subject to the terms and conditions of this License. Notwithstanding the above, Licensee may disclose any Improvements that do not involve disclosure of the Software.

    Copies. The Licensee may make a reasonable number of copies of the Software for the purposes of backup, maintenance of the Software or the development of derivative works based on the Software. These additional copies shall carry the copyright notice and shall be controlled by this License, and will be destroyed along with the original by the Licensee upon termination of the License.
    Acknowledgement. Licensee agrees that any publication of results obtained with the Software will acknowledge its use by an appropriate citation as specified in the documentation.

    Disclaimer of Warranties and Limitation of Liability. THE LICENSEE AGREES THAT ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. JOHN C GREEN MAKES NO REPRESENTATION OR WARRANTY THAT THE SOFTWARE WILL NOT INFRINGE ANY PATENT OR OTHER PROPRIETARY RIGHT. IN NO EVENT SHALL JOHN C GREEN BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    Termination. This License is effective until terminated by either party. Your rights under this License will terminate automatically without notice from John C Green if you fail to comply with any term(s) of this License. You may terminate the license by giving written notice of termination to John C Green. Upon termination of this License, you shall immediately discontinue all use of the Software and destroy the original and all copies, full or partial, of the Software, including any modifications or derivative works, and associated documentation.

    Governing Law and General Provisions. This License shall be governed by the laws of the State of Illinois, excluding the application of its conflicts of law rules. This License shall not be governed by the United Nations Convention on Contracts for the International Sale of Goods, the application of which is expressly excluded. If any provisions of this License are held invalid or unenforceable for any reason, the remaining provisions shall remain in full force and effect. This License is binding upon any heirs and assigns of the Licensee. The License granted to Licensee hereunder may not be assigned or transferred to any other person or entity without the express consent of John C Green. This License constitutes the entire agreement between the parties with respect to the use of the Software licensed hereunder and supersedes all other previous or contemporaneous agreements or understandings between the parties, whether verbal or written, concerning the subject matter. Any translation of this License is done for local requirements and in the event of a dispute between the English and any non-English versions, the English version of this License shall govern. 
*/
$(function() {
  
error =      {
                message:[],                 
                 AddError:function(param){
                    this.message.push(param) ;
                 },
                ShowErrors:function(){  
                   $(".foo").remove();
                 messagingSystem = "<div class=\"foo\">";
                    for(i=0;i<this.message.length;i++){
                        messagingSystem += "<div>" + this.message[i] + "</div>";
                    }
                  messagingSystem += "</div>";
                   $("body").append(messagingSystem);
                } ,
                HideErrors:function(){
                    $(".foo").remove();
                    messagingSystem ="";
                }
            };    ///error;   

$(function() {
  (function(jQuery){
   jQuery.jcg = {};
       jQuery.jcg.validateFields = function (param) {
                       
             var _error = {
                message:[],                 
                 AddError:function(param){
                    this.message.push(param) ;
                 },
                ShowErrors:function(){  
                   $(".foo").remove();
                 messagingSystem = "<div class=\"foo\">";
                    for(i=0;i<this.message.length;i++){
                        messagingSystem += "<div>" + this.message[i] + "</div>";
                    }
                  messagingSystem += "</div>";
                   $("body").append(messagingSystem);
                } ,
                HideErrors:function(){
                    $(".foo").remove();
                    messagingSystem ="";
                }
            };    ///error;     
         
            var _localGlobal  = {
                $form:"",
                $submit: "",
                temp:[],              
                parameters: param,
                error: error || _error, 
                callback: null,              
                regexZip: "",
                regexKeyup: "",
                zipMessage: "Please enter a five digit zip code",
                specialCharsMessage: "Please only use letters, numbers or a space when searching."
            };
            
            //  do nothing if given nothing
            if (arguments.length === 0) { return };
            
            //if we are passed a second parameter, set that to be the callback
            _localGlobal.callback = (arguments[1] === undefined || null) ? null : arguments[1];
            // //if the callback is a funcion, set it as a callback
            if (_localGlobal.callback !== undefined && _localGlobal.callback !== null && $.isFunction(_localGlobal.callback)) {
                _localGlobal.callback.call(_localGlobal.callback);
            }
            //if we are only passed one parameter containing a callback, default the 
            ////settings and pass the callback to the correct variable for execution
            //else if settings has been poorly defined by user , use the default settings
            //set form details - should only be called once - all input shoudl be in the same form
            this.setFormDetails = function (param) {    
                _$input = $(param[0].inputName);
                _localGlobal.$form = _$input.closest("form");
                _localGlobal.$submit = _localGlobal.$form.find(":submit");
                _localGlobal.regexZip = param[0].regex.regexZip
                _localGlobal.regexKeyup = param[0].regex.regexKeyup
            }
            // call setForm only once regardless of number of inputs in parameter
            //used temp array to make sure we are alwasy dealing with an array
            if (!$.isArray(param)) {                
                _localGlobal.temp.push(param);
                param = _localGlobal.temp;
                this.setFormDetails(param);
            } else {
                this.setFormDetails(param);
            }
            //set keyup listsner for jquery object passed as parameter
            //shows error and removes offensive key as soon
            //as it happens
            _localGlobal.checkKeyStrokes = function ($param) {
                var _inputVal =""; 
                $param.keyup(function (e) {
                    if (e.keyCode === 16) { return };
                    _inputVal = $.trim($param.val()); //get trimmed input from user 
                    //set input val to last value before keyup detected
                    if (_localGlobal.regexKeyup.test(_inputVal) === false) {
                        _error.message = [];
                        _error.AddError(_localGlobal.specialCharsMessage);
                        _error.ShowErrors();
                        _inputVal = _inputVal.substring(0, _inputVal.length - 1);
                        $param.val(_inputVal);
                        return;
                    } else {                       
                        _error.HideErrors();
                    }
                });
            }
            //check for empty string and push error into aray if found
            _localGlobal.checkValues = function (param) {
                var _parameter = param;
                var _inputVal ="";
                _localGlobal.$form.on("submit", function (e) {
                     _error.message = [];  
                    for (i = 0; i < param.length; i++) {
                        _$param = $(_parameter[i].inputName);
                        _param = _parameter[i];
                        _inputVal = $.trim(_$param.val());
                        //if the field is empty, push the error message into the local global
                        //error messaging as long as it is not a duplicate of a previous message
                        if (_param.checkAgainst.empty === true) {                          
                            if (_$param.val() === "") {
                                if ($.inArray(_param.errorMessages.empty, _error.message) === -1) {
                                    _error.AddError(_param.errorMessages.empty);
                                }
                            }
                        }
                        //if zip check set to true, and inout field fails the regex for zip
                        if (_param.checkAgainst.zip === true && _localGlobal.regexZip.test(_inputVal) === false) {
                            //if this error is not in the error array add it
                            if ($.inArray(_localGlobal.zipMessage, _error.message) === -1) {
                                _error.AddError(_localGlobal.zipMessage);
                            }
                        }
                    }
                    if (_error.message.length > 0) {
                        //if you wanted to at this point, you could pass the error message array to anywhere you wanted to
                        _error.ShowErrors();
                        return false;
                    } else {
                        for (i = 0; i < param.length; i++) { 
                            //clear placholder if placeholder property set to true  for this element  and the value of the input matches the placeholder
                            if (param[i].checkAgainst.placeholder === true && $(param[i].inputName).attr("placeholder") ===  $(param[i].inputName).val() ) { 
                                $(param[i].inputName).attr("placeholder", "");
                                $(param[i].inputName).val("");
                            }
                        }
                           return true;
                        //  _localGlobal.$form.submit();
                    }
                    _error.message = [];                     
                });

            }
            //set all names to be elements wrapped with jquery object
            for (i = 0; i < param.length; i++) {
                param[i].$input = {};
                param[i].$input = $(param[i].inputName);
            }
            var _$val = "";
            var _emptyCheckArray = [];
            var _messageObj;
            $.each(param, function (index, value) {
                _$val = $(value.inputName);
                //if keystrokes selected, bind listeners
                if (value.checkAgainst.keyStrokes) {
                    _localGlobal.checkKeyStrokes(_$val);
                }
            });
            _localGlobal.checkValues(param);
        }; 

        
   
})($);

myFunc = function(){
        alert("foo");
}     

    fNames = {
                inputName: "#fname",
                checkAgainst: {
                    empty: true,
                    zip: false,
                    stringVal: "Please enter your first name",
                    placeholder: false,
                    keyStrokes: true
                },
                errorMessages:{
                    empty:"Please enter a value"
                },
                regex: {
                    regexZip: /^[0-9]{5}$/,
                    regexKeyup: /^[0-9A-Za-z ,!\.']*$/
                }
            }
            
            lNames = {
                inputName: "#lname",
                checkAgainst: {
                    empty: false,
                    zip: false,
                    stringVal: "please enter your last name",
                    placeholder: true,
                    keyStrokes: false
                },
                errorMessages: {
                    empty: "Please enter a restaurant or cuisine"
                }
            }
            anArray = [fNames, lNames];
            $.jcg.validateFields(anArray);
});


  // this behaves as if within document.ready
});
