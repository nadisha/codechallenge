<!Doctype html>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page isELIgnored="false" %>
<spring:url value="/resources" var="resourceUrl"/>

<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="${resourceUrl}/css/bootstrap.css" rel="stylesheet">
		<link href="${resourceUrl}/css/bootstrap-responsive.css" rel="stylesheet">
    	<script src="${resourceUrl}/js/angular.min.js"></script>
    	<script src="${resourceUrl}/js/app.js"></script>   
    	<script src="${resourceUrl}/js/resultController.js"></script>  		
  	</head>
	<body>

		<div id="content" class="container-fluid" ng-app='CodingChallenge' ng-controller='ResultController' ng-init="init()">
			<!-- Header section -->
			<div class="row-fluid">
				<div class="page-header">					
					<h1>
						<p class="text-center">CingleVue Code Challenge - Nadisha</p>
					</h1>					
				</div>
			</div>
			<div class="row-fluid">
				<!-- Subject dropdown section -->
			  	<div class="span8">
					<form class="form-horizontal">
						<div class="control-group">
							<label class="control-label">Subject</label>
							<div class="controls">
								<select ng-model="subject" ng-options="sub.subject for sub in subjects" ng-change="loadData()">
									<option value="">-- Choose Subject --</option>
								</select>						
							</div>
						</div>
					</form>
				</div>			  
			</div>
			<hr/>
			
			<!-- Data grid -->
			<div class="row-fluid">
			  	<div class="span12">
					<table ng-show="schools.length > 0" class="table table-hover table-bordered table-striped" >
						<thead>
							<tr>
								<th>School
									<a href="" ng-click="predicate = 'school.name'; reverse=false; school_tog = 2">
										<i ng-class='{"icon-chevron-down": school_tog == 1}'></i>
									</a>
									<a href="" ng-click="predicate = '-school.name'; reverse=false; school_tog = 1">		
										<i ng-class='{"icon-chevron-up": school_tog == 2}'></i>
									</a>								
								</th>
								<th>Y3
									<a href="" ng-click="predicate = 'latestY3'; reverse=false; y3_tog=2">
										<i ng-class='{"icon-chevron-down": y3_tog==1}'></i>
									</a>
									<a href="" ng-click="predicate = '-latestY3'; reverse=false; y3_tog=1">		
										<i ng-class='{"icon-chevron-up": y3_tog==2}'></i>
									</a>															
								</th>
								<th>Y5
									<a href="" ng-click="predicate = 'latestY5'; reverse=false; y5_tog=2">
										<i ng-class='{"icon-chevron-down": y5_tog==1}'></i>
									</a>
									<a href="" ng-click="predicate = '-latestY5'; reverse=false; y5_tog=1">		
										<i ng-class='{"icon-chevron-up": y5_tog==2}'></i>
									</a>								
								</th>
								<th>Y7
									<a href="" ng-click="predicate = 'latestY7'; reverse=false; y7_tog=2">
										<i ng-class='{"icon-chevron-down": y7_tog==1}'></i>
									</a>
									<a href="" ng-click="predicate = '-latestY7'; reverse=false; y7_tog=1">		
										<i ng-class='{"icon-chevron-up": y7_tog==2}'></i>
									</a>								
								</th>
								<th>Y9
									<a href="" ng-click="predicate = 'latestY9'; reverse=false; y9_tog=2">
										<i ng-class='{"icon-chevron-down": y9_tog==1}'></i>
									</a>
									<a href="" ng-click="predicate = '-latestY9'; reverse=false; y9_tog=1">		
										<i ng-class='{"icon-chevron-up": y9_tog==2}'></i>
									</a>								
								</th>
								<th>Raw Gain Y3 to Y5
									<a href="" ng-click="predicate = 'rawGainY3Y5'; reverse=false; y3y5_tog=2">
										<i ng-class='{"icon-chevron-down": y3y5_tog==1}'></i>
									</a>
									<a href="" ng-click="predicate = '-rawGainY3Y5'; reverse=false; y3y5_tog=1">		
										<i ng-class='{"icon-chevron-up": y3y5_tog==2}'></i>
									</a>								
								</th>
								<th>Factored Gain Y3 to Y5
									<a href="" ng-click="predicate = 'factoredGainY3Y5'; reverse=false; fy3y5_tog=2">
										<i ng-class='{"icon-chevron-down": fy3y5_tog==1}'></i>
									</a>
									<a href="" ng-click="predicate = '-factoredGainY3Y5'; reverse=false; fy3y5_tog=1">		
										<i ng-class='{"icon-chevron-up": fy3y5_tog==2}'></i>
									</a>								
								</th>
								<th>CLG% Y3 to Y5
									<a href="" ng-click="predicate = 'glgY3Y5'; reverse=false; gy3y5_tog=2">
										<i ng-class='{"icon-chevron-down": gy3y5_tog==1}'></i>
									</a>
									<a href="" ng-click="predicate = '-glgY3Y5'; reverse=false; gy3y5_tog=1">		
										<i ng-class='{"icon-chevron-up": gy3y5_tog==2}'></i>
									</a>								
								</th>
								<th>Gain in Gain Y3 to Y5
									<a href="" ng-click="predicate = 'latestGainInGainY3Y5'; reverse=false; ly3y5_tog=2">
										<i ng-class='{"icon-chevron-down": ly3y5_tog==1}'></i>
									</a>
									<a href="" ng-click="predicate = '-latestGainInGainY3Y5'; reverse=false; ly3y5_tog=1">		
										<i ng-class='{"icon-chevron-up": ly3y5_tog==2}'></i>
									</a>									
								</th>
							</tr>
						</thead>
						<tbody>
							<tr ng-repeat="s in schools | orderBy:predicate:reverse">
								<td>{{s.school.name}}</td>
								<td>{{s.latestY3}}</td>
								<td>{{s.latestY5}}</td>
								<td>{{s.latestY7}}</td>
								<td>{{s.latestY9}}</td>
								<td>{{s.rawGainY3Y5}}</td>
								<td>{{s.factoredGainY3Y5}}</td>
								<td>{{s.glgY3Y5}}</td>
								<td>{{s.latestGainInGainY3Y5}}</td>
							</tr>
						</tbody>
					</table>	
				</div>			  
			</div>										
		</div>
	</body>
</html>