<!-- Modal -->
<div class="modal" id="<%=id%>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"><%=title%></h4>
      </div>
      <div class="modal-body">
         <%=content%>
      </div>
      <div class="modal-footer">
      	<%if(ok){%>
      		<button type="button" class="btn btn-primary"><%=okVal%></button>
      	<%}if(cancel){%>
      		<button type="button" class="btn btn-default" data-dismiss="modal"><%=cancelVal%></button>
      	<%}%>
        <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">保存</button>-->
      </div>
    </div>
  </div>
</div>